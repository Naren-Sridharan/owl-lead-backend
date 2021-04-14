// get Sensor class from  Anyone Around model
const Sensor = require("../models/sensorModel");
// get the custom functions for processing the query results
const f1 = require("../custom_functions.js");
// get employee list

// defining getData function to be called by routes
exports.getData = (req, res) => {
  Sensor.getAll((err, data) => {
    if (err) res.send(err);
    console.log("sensors request successful");
    res.send(f1.modify_result(data));
    // res.send(data)
  })
}
