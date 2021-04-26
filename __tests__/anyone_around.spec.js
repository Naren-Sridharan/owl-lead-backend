const custom_func = require("../anyone_around/custom_functions.js")



describe("Helper function for Anyone Around json response : getTrafficLevel", () => {

  test("It should return the MODERATE traffic level as response", () => {
    expect(custom_func.getTrafficLevel(100 , 2)).toEqual("MODERATE");

  });

  test("It should return the LOW traffic level as response", () => {
    expect(custom_func.getTrafficLevel(100 , 1)).toEqual("LOW");

  });

  test("It should return the HIGH traffic level as response", () => {
    expect(custom_func.getTrafficLevel(100 , 10)).toEqual("HIGH");

  });

});

describe("Helper function for formating date in Anyone Around function" , () => {

  test("The input string should return only hours and minutes along with PM" , () =>{
    expect(custom_func.GetTime("2021-04-21 16:26:00")).toEqual("4:26 pm")
  });

  test("The input string should return only hours and minutes along with AM" , () =>{
    expect(custom_func.GetTime("2021-04-21 6:26:00")).toEqual("6:26 am")
  });

 test("Special Case of time " , () => {
   expect(custom_func.GetTime("2021-04-21 00:26:00")).toEqual("12:26 am")
 })
});

describe("Function to modify query fetched from sql databse in required json format" , () => {
  test("it should be in right format and with right values" , () => {
    var input = [
    {
      sensor_id: 78,
      pedestrian_count: '70',
      time: "2021-04-21T07:08:00.000Z",
      place: 'Harbour Esplanade (West) - Bike Path',
      lattitude: -37.8147,
      longitude: 144.945
    }
  ];
    var output = [
      {"id":78,
      "latlng":{"latitude":-37.8147,"longitude":144.945},
      "value":70,
      "place":"Harbour Esplanade (West) - Bike Path",
      "level":"HIGH",
      "tintColor":null,
      "time":"5:08 pm",
      "duration":null,
      "distance":null}
    ];
    expect(custom_func.modify_result(input)).toEqual(output);
  });

});
