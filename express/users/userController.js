/**
 * functions in the controller layer get passed to the routers as callback functions
 */

const userService = require('./userService')

const getUsers = (done) => {
    userService.getUsers(done);
}

module.exports = {getUsers};