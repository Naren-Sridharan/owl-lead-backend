const express = require('express')

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

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