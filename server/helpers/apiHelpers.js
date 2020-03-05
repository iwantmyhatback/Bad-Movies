const request = require("request");
const axios = require("axios");
const github = require("../../config.js");
const Promise = require("bluebird");

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
// Get your API Key and save it in your config file

let options = { params: { api_key: github.github.API_KEY } };

let movieDB = {};

movieDB.presentGenres = function() {
  let options = { params: { api_key: github.github.API_KEY } };
  return axios.get("https://api.themoviedb.org/3/genre/movie/list", options);
};

movieDB.getSelection = function(genreID) {
  genreID = JSON.parse(genreID);
  let options = { params: { api_key: github.github.API_KEY, with_genres: genreID, sort_by: "popularity.asc" } };
  return axios.get("https://api.themoviedb.org/3/discover/movie", options);
};
// Don't forget to export your functions and require them within your server file
module.exports.movieDB = movieDB;
