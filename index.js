const express = require('express');
const app = express();
const PORT = 3000; // You can choose any available port

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Welcome to LowGear\'s WEB SERVICE!!');
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


//Run npm init -y in the terminal to create a package.json file with default values.
//You'll need to install Express.js, a popular Node.js framework for building web applications. Run npm install express to install it.
