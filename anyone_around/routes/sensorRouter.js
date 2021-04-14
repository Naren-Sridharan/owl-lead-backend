// getting express to initallize router
const express = require('express');
// getting functions from any one around controller
const controller = require('../controllers/sensorController.js')
// initializing router object
const router = express.Router();
// defining the route for get request
router.get('/sensors',controller.getData);

module.exports = router ;
