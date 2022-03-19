const express = require('express');
const app = express();
const _ = require('underscore');
const PORT = 3000 || process.env.PORT;
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

const mysql = require('mysql2');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movieList'
});

// helper functions //
var insertMovies = function(moviesArray) {
  moviesArray.forEach(movies => {
    connection.query (
      `INSERT INTO movies (movieName) VALUES('${movies.title}')`
    );
  });
};
var initialize = _.once(insertMovies);

var getAllMovies = function(callback) {
  connection.query(
    'SELECT * FROM movies',
    function(err, movies) {
      if (err) {
        callback(err);
      } else {
        callback(null, movies);
      }
    }
  );
};

// -------------- //

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected');
    // initialize(movies);
  }
});

app.use(express.static('client/dist'));

app.get('/api/movies', (req, res) => {
  getAllMovies((err, movies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(movies);
    }
  });
});

app.get('/api/movies/search?', (req, res) => {
  const movieQuery = req.query.movieName;
  connection.query (
    `SELECT movieName From movies WHERE movieName = '${movieQuery}'`,
    function(err, movie) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(movie);
      }
    }
  );
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

exports.connection = connection;