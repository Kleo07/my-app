const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 10000;

// Middleware to parse JSON requests
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Example route to handle a GET request
app.get('/api/example', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

// Example route to handle a POST request
app.post('/api/example', (req, res) => {
  const data = req.body;
  // Do something with the data
  res.json({ message: 'Data received!', data: data });
});

// Serve the index.html file for any other request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
