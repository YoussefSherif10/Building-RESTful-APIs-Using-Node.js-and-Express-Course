const userService = require('../users/userService')
//const authService = require('./authService')

const registerUser = (userDetails, done) => {
     userService.findUser(userDetails.email, (err, found) => {
         if (err)
             return done(err);
         if (found)
             return done('User already exists')
         userService.registerUser(userDetails, done);
     });
}

module.exports = {registerUser};