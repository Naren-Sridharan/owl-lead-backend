module.exports = app => {
    const stations = require("../controllers/station.controller.js");
  
  
    // Retrieve all Stations
    app.get("/stations", stations.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/stations/:station_id", stations.findOne);
  
  };