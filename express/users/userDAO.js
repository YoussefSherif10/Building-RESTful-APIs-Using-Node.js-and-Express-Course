/**
 * the userDAO is the layer that acts as the interface of the resource the is
 * responsible for fetching and updating data to the resource
 */
const users = require('./users.json');

const getUsers = (done) => {
    return done(null, users);
}

const getUserById = (userId, done) => {
     const existed = users.find(u => u.userID === userId);
     if (!existed)
         return done('user doesn\'t exist...!');
     return done(null, existed);
}

const updateUserDetails = (userId, userName, done) => {
     let existed = users.find(u => u.userID === userId);
     if (!existed)
         return done('User Not Found');
     existed.username = userName;
     return done(null, 'Successfully updated user name');
}

// export functions to be used in other modules
module.exports = {getUsers, getUserById, updateUserDetails};

