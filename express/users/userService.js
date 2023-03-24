/**
 * userService is the logic layer that users the DAO layer
 */

// use the functions in the userDAO
const userDAO = require('./userDAO');

const getUsers = (done) => {
    userDAO.getUsers(done);
}

module.exports = {getUsers};
