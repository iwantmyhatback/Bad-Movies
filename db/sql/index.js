const mysql = require("mysql");
const mysqlConfig = require("../../config.js");

const connection = mysql.createConnection(mysqlConfig.sql);

connection.connect((error, data) => {
  if (error) console.log(error);
  else console.log(data);
});

module.exports.connection = connection;
