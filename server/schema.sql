DROP DATABASE IF EXISTS movieList;

CREATE DATABASE movieList;

USE movieList;

CREATE TABLE movies (
  id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
  movieName varchar(50) NOT NULL UNIQUE
);


-- CREATE TABLE movies (
--   id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
--   movieName varchar(50) NOT NULL,
--   movieYear int NOT NULL,
--   movieRunTime int NOT NULL,
--   idmbRating int NOT NULL
-- );
