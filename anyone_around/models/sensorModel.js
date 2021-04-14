// getting databse connection cursor
var con = require("../../db_config/db_connect.js");
// sensors constructor
var Sensors = (sensor) => {}

// function to query the required data along with max date time
Sensors.getAll = (result) => {
  con.query(`SELECT
            	pd_cnts.sensor_id ,
            	SUM(pedestrian_count) as pedestrian_count,
            	MAX(pd_cnts.date_time) as time ,
            	pd_cnts_snsrs.place ,
            	pd_cnts_snsrs.lattitude ,
            	pd_cnts_snsrs.longitude
            FROM
            	pd_cnts
            INNER JOIN pd_cnts_snsrs on
            	pd_cnts.sensor_id = pd_cnts_snsrs.sensor_id
            GROUP BY
            	pd_cnts.sensor_id;
        `, (err, res) => {
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
