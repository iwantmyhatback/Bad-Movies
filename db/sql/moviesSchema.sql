DROP DATABASE IF EXISTS badmovies;
CREATE DATABASE badmovies;
USE badmovies;

CREATE TABLE movies
(
  title VARCHAR(255),
  release_date VARCHAR(50),
  popularity INT(4),
  id INT(10),
  poster_path VARCHAR(255),
  backdrop_path VARCHAR(255),
  vote_count INT(9)
);