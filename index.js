// index.js

// Import necessary modules
const http = require('http');

// Create a basic HTTP server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

// Define the port to listen on
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
