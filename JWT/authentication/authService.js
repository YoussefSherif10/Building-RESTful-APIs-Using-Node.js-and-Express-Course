const jwt = require('jsonwebtoken')
const config = require('../config')

function verifyUser({email, password}, userData) {
    if (email === userData.email && password === userData.password)
        return true;
    return false;
}

function createToken(userData) {
    const paylodad = {
        role: "USER",
        email: userData.email,
        name: userData.name
    }

    const token = jwt.sign(paylodad, config.AUTH_SECRET, {
        expiresIn: 3600,
    })

    return token;
}

module.exports = {verifyUser, createToken}