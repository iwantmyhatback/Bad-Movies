const movieModel = require("../models/movieModel.js");
const apiHelpers = require("../helpers/apiHelpers.js");

//Return requests to the client
module.exports = {
  getSearch: (req, res) => {
    apiHelpers.movieDB.getSelection(req.query.genreID).then(data => {
      // console.log(data.data);
      res.body = data.data;
      res.send(res.body);
    });
  },
  getGenres: (req, res) => {
    apiHelpers.movieDB.presentGenres().then(data => {
      res.body = data.data;
      res.send(res.body);
    });

    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
  },
  saveMovie: (req, res) => {
    console.log(req.body);
    ///////////////////////////CHANGE INPUT FORMAT OF MOVIEMODEL.QUERY TO ACCECPT THE OPJECT IN REQ.BODY
    movieModel.query();
    res.send();
  },

  deleteMovie: (req, res) => {}
};
