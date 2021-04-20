const sql = require("../../db_config/db_connect.js");

// Stations constructor
var Station = (station) => {}

Station.findById = (station_id, result) => {
    sql.query(`SELECT * FROM pso_stns WHERE station_id = ${station_id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
  
      if (res.length) {
        console.log("found station: ", res);
        result(null, res);
        return;
      }
  
      // not found station with the id
      result({ kind: "not_found" }, null);
    });
  };
  
  Station.getAll = result => {
    sql.query("SELECT * FROM pso_stns", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("got the stations");
      result(null, res);
    });
  };

module.exports = Station;