// getting the express server
const express = require('express');
const bodyParser = require("body-parser");
// getting routes for anyone around
const sensorRoutes = require("./anyone_around/routes/sensorRouter")
// getting express instance
const app = express();

// defining the port
const PORT = process.env.PORT || 3000;

// initializing the express server
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// create sensor routes
app.use('/' , sensorRoutes);

//defining root route
app.get("/", (req, res) => {
  res.json({ message: "You have reached root address of owllead backend " });
});



// heath check
app.get('/health_check', (request, response) => {
    var package_json = require('./package.json');
    var results = {
      isSuccess: true,
      message: 'Server Running',
      version: package_json.version,
      port: 3000
    };
    response.status(200).send(results);
  });
