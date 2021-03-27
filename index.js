const app = express();

app.listen(3000, () => {
    console.log('App running on port 3000');
  });

app.get('/health_check', (request, response) => {
    var package_json = require('./package.json');
    var results = {
      isSuccess: true,
      message: 'Server Running',
      version: package_json.version,
      port: 3000,
    };
    response.status(200).send(results);
  });