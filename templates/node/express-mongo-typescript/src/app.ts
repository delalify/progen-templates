// Import Express and some interfaces
import express, {Request, Response} from 'express'

// Import configuration for the server
import {SERVER_PORT} from './config/server.config' 
import exampleRouter from './routes/example.route'

// Initialize an Express application
const app = express()

// Use middleware that sends responses in JSON format
app.use(express.json())

// Initialize a route handler
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!')
})

// Use a router to handle all incoming requests to the `/scream` endpoint
app.use('/scream', exampleRouter)

// Listen for requests at the server port
app.listen(SERVER_PORT, () => {
  console.log(`Server started at http://localhost:${SERVER_PORT}`)
  return console.log(`Try navigating to \`http://localhost:${SERVER_PORT}/scream\``)
})
