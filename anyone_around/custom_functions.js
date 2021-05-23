// function to map the traffic level to pedestrain_Count
var funcs = () => {} ;

funcs.getTrafficLevel = (sum, val) => {
  const perc = val / sum
  if (perc <= .01) return ("LOW");
  else if (perc <= .03) return ("MODERATE");
  else return ("HIGH");
}

// function to change the date format
funcs.GetTime = (time) => {
  var date = new Date(time);
  var localeSpecificTime = date.toLocaleTimeString();
  return localeSpecificTime.replace(/:\d+ /, ' ');
}


// creaitng the expected json file according to the front end needs
funcs.modify_result = (sensors) => {
  // get total sum of pedestrian count in each sensor
  Total = sensors.reduce(function(accumulator, currentValue) {
    return accumulator + parseInt(currentValue.pedestrian_count);
  }, 0);
  // get max and min ped count
  max = Math.max.apply(Math, sensors.map(function(o) {
    return o.pedestrian_count;
  }))
  // min = Math.min.apply(Math, sensors[0].map(function(o) { return o.pedestrian_count; }))
  var color_list = [];
  var res_list = [];
  sensors.forEach((item, i) => {
    // json response
    res_list[i] = {
      "id" : item.sensor_id,
      "latlng": {
        "latitude": item.lattitude,
        "longitude": item.longitude
      },
      "value": parseInt(item.pedestrian_count),
      "place": item.place,
      "level": funcs.getTrafficLevel(Total, item.pedestrian_count),
      "tintColor": null,
      'time':funcs.GetTime(item.time),
      "duration": null,
      "distance": null
    }
  });


  return (res_list)
}

module.exports  = funcs;
