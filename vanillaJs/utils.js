let getReqData = (req) => {
    /**
     * this function takes the request and appends its body after
     * converting it to a string then return a promise with it.
     */
    return new Promise((resolve, reject) => {
        try {
            let body = '';

            // this event access the body of the request
            req.on('data', (chunk) => {
                body += chunk.toString();
            });

            // this events gets executed at the end of the request
            req.on('end', () => {
                resolve(body);
            });
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {getReqData};