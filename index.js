const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000; // You can choose any available port

// Allow requests from 'https://lowgearpage.onrender.com'
app.use(cors({ origin: 'https://lowgearpage.onrender.com' }));

// Define a route
app.get('/', (req, res) => {
    res.send('Hello, Welcome to LowGear\'s WEB SERVICE!!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Define another route
app.get('/api/personalData', (req, res) => {
    const personalData = {
        "LastName": "Doe",
        "FirstName": "John",
        "MiddleName": "Michael",
        "BirthDate": "1990-05-15",
        "Gender": "Male",
        "MobileNo": "+1234567890",
        "Address": "123 Main Street, Cityville",
        "EmailAddress": "johndoe@example.com"
    };
    const data = { message: '', personalData: personalData };
    res.json(data);
});



//Run npm init -y in the terminal to create a package.json file with default values.
//You'll need to install Express.js, a popular Node.js framework for building web applications. Run npm install express to install it.
