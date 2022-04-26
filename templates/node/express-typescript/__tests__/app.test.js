process.env.NODE_ENV = 'test'

// Import Chai
const chai = require( 'chai' )

// Import Supertest as `request`
const request = require( 'supertest' )

// Import the main server
const app = require( '../dist/app' ).default

const expect = chai.expect

describe( 'Server Integration Tests', function () {
	describe( 'GET /', () => {
		it( 'it should send a response of "Hello, World!"', ( done ) => {
			request( app )
				.get( '/' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 200 )
					expect( response.text ).to.be.equal( 'Hello, World!' )
					done()
				} )
		} )

		it( 'it should GET the default response at /scream', ( done ) => {
			request( app )
				.get( '/scream' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 200 )
					expect( response.text ).to.be.equal(
						'You have reached the example endpoint. Try navigating to `/Rick`. Bye.'
					)
					done()
				} )
		} )
	} )

	describe( 'Unknown routes', () => {
		it( 'it should return an error response for GET /unknown', ( done ) => {
			request( app )
				.get( '/unknown' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 404 )
					expect( response.text ).to.be.equal( 'The requested route does not exist.' )
					done()
				} )
		} )
	} )

	describe( 'Unsupported methods', () => {
		it( 'it should return an error response for POST /', ( done ) => {
			request( app )
				.post( '/' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 405 )
					expect( response.text ).to.be.equal( 'Method Not Allowed. Received: \'POST\'' )
					done()
				} )
		} )
	} )
} )
