//Select one db to work with:

//For SQL
const sqlDb = require("../../db/sql");
//For Mongo
// const mongoDb = require('../../db/mongodb')
//
var save = (title, release_date, popularity, id, poster_path, backdrop_path, vote_count) => {
  // sqlDb.connection
  //   .query(
  //     "INSERT INTO movies (title,release_date,popularity,id,poster_path,backdrop_path,vote_count) VALUES (?,?,?,?,?,?,?)",
  //     [title, release_date, popularity, id, poster_path, backdrop_path, vote_count]
  //   )
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

module.exports.query = save;
