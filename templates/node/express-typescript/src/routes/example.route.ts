import { Router, Request, Response } from 'express';
import  exampleController  from '../controllers/example.controller';

// Create a router
const exampleRouter = Router()

// Send a message when the default route is queried
exampleRouter.get('/', (req: Request, res: Response) => {
  return res.send('You have reached the example endpoint. Try navigating to `/Rick`. Bye.')
})

// Pass incoming requests to the controller
exampleRouter.get('/*', (req: Request, res: Response) => {
  return exampleController(req, res)
})

// Handle unknown routes/endpoints
exampleRouter.get( '*',  ( _req, res )=> {
	return res.send({is_error: true, status_code: 404, message: 'The requested route does not exist.'})
} )

// Handle unsupported HTTP request methods
exampleRouter.all( '*',  ( req, res ) => {
	return res.send( {is_error: true, status_code: 405, message: `Method Not Allowed. Received: '${req.method}'`} )
} )

export default exampleRouter