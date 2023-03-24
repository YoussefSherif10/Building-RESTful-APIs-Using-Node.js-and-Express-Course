/**
 * the userDAO is the layer that acts as the interface of the resource the is
 * responsible for fetching and updating data to the resource
 */
const users = require('./users.json');

const getUsers = (done) => {
    return done(null, users);
}

// export functions to be used in other modules
module.exports = {getUsers};

