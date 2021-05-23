const custom_func = require("../pso/function.js")


describe("Function to modify query fetched from sql databse in required json format" , () => {
  test("it should be in right format and with right values" , () => {
    var input = [
     {
      station_id: 43,
      station_name: 'Melbourne Central Railway Station (Melbourne City)',
      latitude: -37.8099,
      longitude: 144.963,
      day_level: 'MODERATE',
      night_level: 'HIGH'
     }
    ];
    var output = [{
      "id":43,
      "latlng":{
        latitude: -37.8099,
        longitude: 144.963
      },
      "place":'Melbourne Central Railway Station (Melbourne City)',
      "level":"HIGH",
      "duration":null,
      "distance":null
    }];
    expect(custom_func.modify_station(input)).toEqual(output);
  });

});


describe("Function to filter stations outside the city bounds " , () => {
  test("it should not be filtered and returned as it is  " , () => {
    var output = [{
      "id":44,
      "latlng":{
      "latitude":-37.8074,
      "longitude":144.943
      },
      "place":"North Melbourne Railway Station (West Melbourne)",
      "level":"HIGH",
      "duration":null,
      "distance":null
    }];
    expect(custom_func.filter_station(output)).toEqual(output);
  });

  test("it should  be filtered and returned null" , () => {
    var input = [
     {
    id: 24,
    latlng: { latitude: -37.8983, longitude: 145.088 },
    place: 'Oakleigh Police Station',
    level: 'LOW',
    duration: null,
    distance: null
     }
    ];
    expect(custom_func.filter_station(input)).toEqual([]);
  });


});
