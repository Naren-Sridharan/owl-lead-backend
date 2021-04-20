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
      "level": 'LOW',
      "duration": null,
      "distance": null
    }
  });


  return (res_list)
}
  