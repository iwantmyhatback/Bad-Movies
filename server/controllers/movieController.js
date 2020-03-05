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
    movieModel.save(req.body).catch(err => {
      console.log("There Was An Insert Error: " + err);
    });

    movieModel.send().then(data => {
      res.send(data);
    });
  },

  getFavs: (req, res) => {
    movieModel.send().then(data => {
      res.send(data);
    });
  },

  deleteMovie: (req, res) => {
    movieModel.remove(req.body.id);
    res.send();
  }
};
