//Select one db to work with:

//For SQL
const sqlDb = require("../../db/sql");
//For Mongo
// const mongoDb = require('../../db/mongodb')
//
var save = requestBody =>
  sqlDb.connection.asyncQuery(
    "INSERT INTO movies (title,release_date,popularity,id,poster_path,backdrop_path,vote_count) VALUES (?,?,?,?,?,?,?)",
    [
      requestBody.body.title,
      requestBody.body.release_date,
      requestBody.body.popularity,
      requestBody.body.id,
      requestBody.body.poster_path,
      requestBody.body.backdrop_path,
      requestBody.body.vote_count
    ]
  );

var send = () => sqlDb.connection.asyncQuery("SELECT * FROM movies");

var remove = id => sqlDb.connection.asyncQuery("DELETE FROM movies WHERE id=?", [id]);

module.exports.save = save;
module.exports.send = send;
module.exports.remove = remove;
