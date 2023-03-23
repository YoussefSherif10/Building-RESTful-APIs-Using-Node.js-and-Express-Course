/**
 * express is a fast and flexible middleware framework based on the connection module
 * it allows routing for RESTful APIs and allows chaining and funneling the incoming requests
 * express serves static files to be rendered by the browser
 * it also allows to develop a modular RESTful backend
 * @type {e | (() => Express)}
 */

// import the express module
const express = require('express');

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
    res.send('Hello');
})

/**
 * route parameters are used to get the corresponding values in the URL segment
 * the key-value pairs are published in the req.params object
 */
app.get('/api/:userId/courses/:courseId', (req, res) => {
    res.send(req.params);
})

app.listen(PORT, (err) => {
    if (err)
        console.log('Error in server setup');
    console.log('Server listening on port ', PORT);
})
