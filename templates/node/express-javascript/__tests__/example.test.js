process.env.NODE_ENV = 'test'

// Import Chai
const chai = require( 'chai' )

// Import Supertest as `request`
const request = require( 'supertest' )

// Import the main server
const app = require( '../src/app' )

const expect = chai.expect

describe( 'Scream API Integration Tests', function () {
	describe( 'GET /scream', () => {
		it( 'it should GET the default response at the base endpoint', ( done ) => {
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

		it( 'it should return a response with text of "DDDAAAVVVEEE!!!"', ( done ) => {
			request( app )
				.get( '/scream/dave' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 200 )
					expect( response.text ).to.be.equal( 'DDDAAAVVVEEE!!!' )
					done()
				} )
		} )
	} )

	describe( 'Unsupported methods', () => {
		it( 'it should send an error response for unsupported method POST', ( done ) => {
			request( app )
				.post( '/scream' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 405 )
					expect( response.body ).to.be.eql( {
						is_error: true,
						status_code: 405,
						message: 'Method Not Allowed. Received: \'POST\'',
					} )
					done()
				} )
		} )
	} )
} )
