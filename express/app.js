/**
 * express is a fast and flexible middleware framework based on the connection module
 * it allows routing for RESTful APIs and allows chaining and funneling the incoming requests
 * express serves static files to be rendered by the browser
 * it also allows to develop a modular RESTful backend
 * @type {e | (() => Express)}
 */

const express = require('express');
const config = require('./config');
const userRouter = require('./users/index');

// create express application by using the express function
// exported by the express module
// it is called 'app' by convention
let app = express();

// first is the Logger function that log the incoming request to ensure that the
// request is received
const LoggerMiddleware = (req, res, next) => {
    console.log(`Logged ${req.url} ${req.method} ${new Date()}`);
    next();
}

// call the log function
app.use(LoggerMiddleware);

// parse the incoming payload
app.use(express.json());

// urlencoded parses the incoming request and is based on a "body parser"
app.use(express.urlencoded())

// the first router
app.use('/api/users', userRouter);


// error
app.use((req, res, next) => {
    res.status(400).send('Path not found');
})


// start listening
app.listen(config.PORT, () => {
    console.log('the server is listening at port ', config.PORT);
})



