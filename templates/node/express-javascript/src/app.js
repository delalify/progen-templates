// Import Express
const express = require( 'express' )

// Import configuration for the server
const { SERVER_PORT } = require( './config/server.config' )

// Import the example router
const exampleRouter = require( './routes/example.route' )

// Initialize an Express application
const app = express()

// Use middleware that sends responses in JSON format
app.use( express.json() )

// Initialize a route handler
app.get( '/', ( req, res ) => {
	return res.status( 200 ).send( 'Hello, World!' )
} )

// Use a router to handle all incoming requests to the `/scream` endpoint
app.use( '/scream', exampleRouter )

// Handle unknown routes/endpoints
app.get( '*', ( req, res ) => {
	return res.status( 404 ).send( 'The requested route does not exist.' )
} )

// Handle unsupported HTTP request methods
app.all( '*', ( req, res ) => {
	return res.status( 405 ).send( `Method Not Allowed. Received: '${req.method}'` )
} )

// Check if the file is imported as a module
if ( require.main === module ) {
	// Listen for requests at the server port
	app.listen( SERVER_PORT, () => {
		console.log( `Server started at http://localhost:${SERVER_PORT}` )
		return console.log( `Try navigating to \`http://localhost:${SERVER_PORT}/scream\`` )
	} )
}

module.exports = app
