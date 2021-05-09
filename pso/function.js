// create the expected station json file according to the front end
var res_list = [];

exports.modify_station = (stations) => {
  stations.forEach((item, i) => {
    // json response
    res_list[i] = {
      "id" : item.station_id,
      "latlng": {
        "latitude": item.latitude,
        "longitude": item.longitude
      },
      "place": item.station_name,
      "level": (isDay())? item.day_level : item.night_level,
      "duration": null,
      "distance": null
    }
  });


  return (res_list)
}



const geolib = require('geolib');

exports.filter_station = (stations) => {
  var filtered_stations = stations.filter(function(station){
    return geolib.isPointWithinRadius(
      station.latlng,
      { latitude: -37.8138, longitude: 144.9578 },
      10000
    ) == true;
  });
  return filtered_stations;
}

function isDay() {
  const hours = (new Date()).getHours();
  return (hours >= 6 && hours < 21);  //set day start from 6am to 9pm 
}

  
