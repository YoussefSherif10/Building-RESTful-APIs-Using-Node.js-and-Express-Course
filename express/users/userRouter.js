/**
 * this layer forwards the requests to the appropriate controller function
 */

const userController = require('./userController')
const express = require('express');
const {Router} = require("express");

// create the routes
const routes = express.Router();

// create a route to the root of the app with a get method
routes.get("/", (req, res) => {
    try {
        userController.getUsers((err, result) => {
            if (err)
                return res.status(400).send(err);
            return res.status(200).send({"status": "OK", data: result});
        })
    } catch (e) {
        return res.status(500).send('Try again after sometime');
    }
});

module.exports = routes;
