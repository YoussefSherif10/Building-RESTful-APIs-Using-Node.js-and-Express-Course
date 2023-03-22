// import the http module which is a core node module to create a server
const http = require('http');

// port for the client tot connect to the server which can be specified
// or read from the dev env variables
const PORT = process.env.PORT || 80

/**
 create the server using the create server method
 the request contains all the data encapsulated in the request from the client
 the response parameter is the return from the server to the client
 */
const server = http.createServer((request, response) => {
    // the header carries info about the request "200" mean successful request
    response.writeHead(200, {
        "content-type": "text/plain"
    });

    // this method tells the client that the response is completed
    response.end("Hello!!!");
});

// the server listens to client's events through the port using the eventEmitter module
server.listen(PORT, () => {
    console.log('server is ready and listening at port ', PORT);
});

server.on('error', (error) => {
    if (error.code === 'EADRINUSE')
        console.log('port is already in use');
})
