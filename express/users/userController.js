/**
 * functions in the controller layer get passed to the routers as callback functions
 */

const userService = require('./userService')

const getUsers = (done) => {
    userService.getUsers(done);
}

const getUserById = (userId, done) => {
    userService.getUserById(userId, done);
}

module.exports = {getUsers, getUserById};