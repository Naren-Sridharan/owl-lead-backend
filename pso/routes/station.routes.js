const express = require('express');
const router = express.Router();
const stations = require("../controllers/station.controller.js");

// Retrieve all Stations
router.get('/pso_stations',stations.findAll);

// Retrieve a single Station
router.get("/pso_stations/:station_id", stations.findOne);

module.exports = router;