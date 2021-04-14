// getting databse connection cursor
var con = require("../../db_config/db_connect.js");
// sensors constructor
var Sensors = (sensor) => {}

// function to query the required data along with max date time
Sensors.getAll = (result) => {
  con.query(`SELECT pd_cnts.sensor_id , SUM(pedestrian_count) as pedestrian_count ,pd_cnts_snsrs.place ,pd_cnts_snsrs.lattitude ,pd_cnts_snsrs.longitude
              FROM pd_cnts
              INNER JOIN pd_cnts_snsrs on pd_cnts.sensor_id = pd_cnts_snsrs.sensor_id
              GROUP BY pd_cnts.sensor_id
              ORDER BY pd_cnts.sensor_id ;
              SELECT MAX(date_time) as max_date_time FROM pd_cnts;`, (err, res) => {
    if (err) {
      console.log("error while fetching customers");
      result(null, err);
      return;
    } else {
      console.log("got the sensors");
      result(null, res);
      return;
    }
  })
};

// exporting the class
module.exports = Sensors;
