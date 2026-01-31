// Import the Express framework and the Request and Response types for typing route handlers
import express from 'express';
import type { Request, Response } from 'express';


// Create an Express application instance
const app = express();

// Store the port number the server will listen on
const port = 3000;

// Define a GET route for the root URL path
app.get('/', (req: Request, res: Response) => {
  // Send a text response back to the client
  res.send('Hello World from TypeScript!');
});

// Start the server and listen for requests on the specified port
app.listen(port, () => {
  // Log a message to the terminal to confirm the server is running
  console.log(`Example app listening at http://localhost:${port}`);
});