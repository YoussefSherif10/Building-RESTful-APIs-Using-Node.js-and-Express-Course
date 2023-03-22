// import the http module which is a core node module to create a server
const http = require('http');

// import the resource which is the array of objects
const {todo} = require('../vanillaJs/resorces/resource');

// import the utils
const {getReqData} = require('./utils');

// port for the client tot connect to the server which can be specified
// or read from the dev env variables
const PORT = process.env.PORT || 80

/**
 create the server using the create server method
 the request contains all the data encapsulated in the request from the client
 the response parameter is the return from the server to the client
 */
const server = http.createServer(async (request, response) => {
    // respond to a GET request
    if (request.url === '/api/todos' && request.method === 'GET'){
        // the header carries info about the request "200" mean successful request
        response.writeHead(200, {
            // send the data in JSON format
            "content-type": "application/json"
        });

        // make the todo array in JSON format then send it
        response.end(JSON.stringify(todo));
    }
    else if (request.url === '/api/todos' && request.method === 'POST'){
        // respond to POST request
        // get the data from the request body
        let data = await getReqData(request);

        // push the new data to the resource
        todo.push(JSON.parse(data));

        // the header carries info about the request "200" mean successful request
        response.writeHead(201, {
            "content-type": "application/json"
        });

        // respond with the updated array
        response.end(JSON.stringify(data));
    }
    else if (request.url.match(/\/api\/todos\/[0-9]+/) && request.method === 'PUT'){
        // get the id from url to update it
        const id = request.url.split('/')[3];
        const entry = todo.findIndex(t => t.id === parseInt(id));

        if (entry === -1){
            response.writeHead(404, {"content-type": "application/json"});
            response.end("No Such Entry");
        }
        else {
            let data = await getReqData(request);
            todo.splice(entry, 1, JSON.parse(data));

            response.writeHead(200, {"content-type": "application/json"});
            response.end(JSON.stringify(todo));
        }
    }
    else if (request.url.match(/\/api\/todos\/[0-9]+/) && request.method === 'DELETE'){
        const id = request.url.split('/')[3];
        const entry = todo.findIndex(t => t.id === parseInt(id));

        if (entry === -1){
            response.writeHead(404, {'content-type': 'application/json'});
            response.end('Entry Not Found');
        }
        else {
            todo.splice(entry, 1);
            response.writeHead(200, {'content-type': 'application/json'});
            response.end('DELETED');
        }
    }
});

// the server listens to client's events through the port using the eventEmitter module
server.listen(PORT, () => {
    console.log('server is ready and listening at port ', PORT);
});

server.on('error', (error) => {
    if (error.code === 'EADRINUSE')
        console.log('port is already in use');
})
