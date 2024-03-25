const express = require('express');
const app = express();
const PORT = 3000; // You can choose any available port

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, this is your API!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Define another route
app.get('/api/data', (req, res) => {
    const data = { message: 'This is some data from your API!' };
    res.json(data);
});
