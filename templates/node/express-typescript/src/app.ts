// Import Express
import express, {Request, Response} from 'express'

// Import configuration for the server
import {SERVER_PORT} from './config/server.config' 

// Initialize an Express application
const app = express()

// Initialize a route handler
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// Listen for requests at the server port
app.listen(SERVER_PORT, () => {
  return console.log(`Server started at http://localhost:${SERVER_PORT}`)
})
