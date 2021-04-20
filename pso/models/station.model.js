const sql = require("./db.js");

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
        console.log("found station: ", res[0]);
        result(null, res[0]);
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
  
      console.log("stations: ", res);
      result(null, res);
    });
  };

module.exports = Station;