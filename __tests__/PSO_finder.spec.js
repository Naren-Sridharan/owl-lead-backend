const custom_func = require("../pso/function.js")


describe("Function to modify query fetched from sql databse in required json format" , () => {
  test("it should be in right format and with right values" , () => {
    var input = [
    {
    station_id: 59,
    station_name: 'East Richmond Railway Station (Richmond)',
    latitude: -37.8264,
    longitude: 144.997
    }
  ];
    var output = [
     {
    id: 59,
    latlng: { latitude: -37.8264, longitude: 144.997 },
    place: 'East Richmond Railway Station (Richmond)',
    level: 'LOW',
    duration: null,
    distance: null
     }
    ];
    expect(custom_func.modify_station(input)).toEqual(output);
  });

});


describe("Function to filter stations outside the city bounds " , () => {
  test("it should not be filtered and returned as it is " , () => {
    var input = [
     {
    id: 59,
    latlng: { latitude: -37.8264, longitude: 144.997 },
    place: 'East Richmond Railway Station (Richmond)',
    level: 'LOW',
    duration: null,
    distance: null
     }
    ];
    expect(custom_func.filter_station(input)).toEqual(input);
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
