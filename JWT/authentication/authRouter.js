const express = require('express')
const router = express.Router();
const authController = require('./authController')

 router.post('/register', (req, res) => {
     try {
         const {name, email, password} = req.body;
         if (!(name, email, password))
             return res.status(400).send('required inputs are missing');

         const userDetails = {
             name, email, password
         }

         authController.registerUser(userDetails, (error, result) => {
              if (error)
                  return res.status(400).send({"ERROR": error});
              return res.status(201).send(result);
         })

     } catch (e) {
         res.status(400).send({"ERROR": "Unexpected error try again"});
     }
 })

module.exports = router;