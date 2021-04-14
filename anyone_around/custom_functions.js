var Gradient = require("javascript-color-gradient");

var getGradient = (value, max, total) => {
  const colorGradient = new Gradient();
  colorGradient.setGradient("#cc2121", "#f5ea14", "#2ea630");
  colorGradient.setMidpoint(parseInt(max * 100 / total));
  var color = colorGradient.getColor(parseInt(value * 100 / total) + 1);
  return (color);
}

var getTrafficLevel = (sum, val) => {
  const perc = val / sum
  if (perc <= .01) return ("low");
  else if (perc <= .03) return ("moderate");
  else return ("high");

}

exports.modify_result = (sensors) => {
  // get total sum of pedestrian count in each sensor
  Total = sensors[0].reduce(function(accumulator, currentValue) {
    return accumulator + parseInt(currentValue.pedestrian_count);
  }, 0);
  // get max and min ped count
  max = Math.max.apply(Math, sensors[0].map(function(o) {
    return o.pedestrian_count;
  }))
  // min = Math.min.apply(Math, sensors[0].map(function(o) { return o.pedestrian_count; }))
  var color_list = [];
  var res_list = [];
  sensors[0].forEach((item, i) => {
    res_list[i] = {
      "latlng": {
        "latitude": item.lattitude,
        "longitude": item.longitude
      },
      "title": item.place,
      "description": {
        "value": item.pedestrian_count,
        "place": item.place,
        "level": getTrafficLevel(Total, item.pedestrian_count),
      },
      "tintColor": getGradient(item.pedestrian_count, max, Total),
    }
    // color_list[i] = getGradient(item.pedestrian_count, max, Total)
  });


  return (res_list)
}
