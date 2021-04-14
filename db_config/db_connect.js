const mysql = require('mysql2');
const db_cred = require('../db_config/db_creds.json');

var con = mysql.createConnection({
  "host" : db_cred.host,
  "user" : db_cred.user,
  "password" : db_cred.password,
  "database" : db_cred.database,
  "multipleStatements": true
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to the Database!");
});

module.exports = con;
