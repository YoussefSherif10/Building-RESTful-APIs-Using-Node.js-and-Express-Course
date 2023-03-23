/**
 * express is a fast and flexible middleware framework based on the connection module
 * it allows routing for RESTful APIs and allows chaining and funneling the incoming requests
 * express serves static files to be rendered by the browser
 * it also allows to develop a modular RESTful backend
 * @type {e | (() => Express)}
 */

// import the express module
const express = require('express');

// import the array from resources
const {users} = require('./resources/users');

// create express application by using the express function
// exported by the express module
// it is called 'app' by convention
let app = express();

// the port to run the server on
let PORT = 80;

/**
 * app.METHOD(PATH, HANDLER)
 * here the method is get request and the path is the url which is the location on the server
 * handler is the callback function to be executed
 */
app.get('/', (req, res) => {
    res.send(users);
})

/**
 * route parameters are used to get the corresponding values in the URL segment
 * the key-value pairs are published in the req.params object
 */
app.get('/users/:userId', (req, res) => {
    const userData = users.find(u => parseInt(u.userID) === parseInt(req.params.userId));
    if (userData)
        res.status(200).send(userData);
    else
        res.status(404).send('Given id not found');
})

app.listen(PORT, (err) => {
    if (err)
        console.log('Error in server setup');
    console.log('Server listening on port ', PORT);
})
