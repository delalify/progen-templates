const express = require('express')

const {SERVER_PORT} = require('./config/server.config') 

// Initialize an Express application
const app = express()

// Initialize a route handler
app.get('/', function(req, res) {
  res.send('Hello, World!')
})

// Listen for requests at the server port
app.listen(SERVER_PORT, function() {
  return console.log(`Server started at http://localhost:${SERVER_PORT}`)
})
