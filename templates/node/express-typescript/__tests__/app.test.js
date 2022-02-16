/* eslint-disable no-undef */
process.env.NODE_ENV = 'test'

// Import Chai
const chai = require( 'chai' )

// Import Supertest as `request`
const request = require( 'supertest' )

// Import the main server
const app = require( '../dist/app' ).default

const expect = chai.expect

describe( 'Server Integration Tests', function () {
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
	} )

	describe( 'Unknown routes', () => {
		it( 'it should return an error response for GET /unknown', ( done ) => {
			request( app )
				.get( '/unknown' )
				.end( function ( error, response ) {
					expect( response.statusCode ).to.equal( 404 )
					expect( response.body ).to.be.eql( {
						is_error: true,
						status_code: 404,
						message: 'The requested route does not exist.',
					} )
					done()
				} )
		} )
	} )
} )
