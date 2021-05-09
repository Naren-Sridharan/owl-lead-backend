const Station = require("../models/station.model.js");
const f1 = require("../function.js");


// Retrieve all Stations.
exports.findAll = (req, res) => {
    Station.getAll((err, data) => {
        if (err)
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving stations."
          });
        else {
          console.log("stations request successful");
          var modified = f1.modify_station(data) //modify to json 
          var filtered = f1.filter_station(modified)   //filter based on frontend needs
          res.send(filtered);
        }
    });
  
};

// Find a single station with station_id
exports.findOne = (req, res) => {
    Station.findById(req.params.station_id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Station with id ${req.params.station_id}.`
            });
          } else {
            res.status(500).send({
              message: "Error retrieving Station with id " + req.params.station_id
            });
          }
        } else res.send(data);
      });
  
};