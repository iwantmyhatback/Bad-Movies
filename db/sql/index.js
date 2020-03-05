const mysql = require("mysql");
const mysqlConfig = require("../../config.js");
const Promise = require("bluebird");

const connection = mysql.createConnection(mysqlConfig.sql);

connection.connect((error, data) => {
  if (error) console.log(error);
  else console.log(data);
});

module.exports.connection = connection;
module.exports.connection.asyncQuery = Promise.promisify(connection.query);
