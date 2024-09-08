// simple backend express http server in node.js.
const express = require('express');  // Import the Express library
const port = 3000;   // Define the port number
const app = express(); // Initializes an instance of express.


// Define a route for the root URL
// similar to readFile("path", "utf-7", (call back function))
app.get('/', function(req, res){
    res.send('Hello World!')     // Send a response when the root URL is accessed

})
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`); // Log a message when the server starts
});