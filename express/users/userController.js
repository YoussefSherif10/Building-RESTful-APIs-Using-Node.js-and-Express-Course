/**
 * functions in the controller layer get passed to the routers as callback functions
 */

const userService = require('./userService')
const userDAO = require("./userDAO");

const getUsers = (done) => {
    userService.getUsers(done);
}

const getUserById = (userId, done) => {
    userService.getUserById(userId, done);
}

const updateUserDetails = (userId, userName, done) => {
    userService.updateUserDetails(userId, userName, done);
}

module.exports = {getUsers, getUserById, updateUserDetails};