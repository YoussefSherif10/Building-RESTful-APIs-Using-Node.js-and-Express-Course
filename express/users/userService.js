/**
 * userService is the logic layer that users the DAO layer
 */

// use the functions in the userDAO
const userDAO = require('./userDAO');

const getUsers = (done) => {
    userDAO.getUsers(done);
}

const getUserById = (userId, done) => {
    userDAO.getUserById(userId, done);
}

module.exports = {getUsers, getUserById};
