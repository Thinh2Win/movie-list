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
app.use(express.json());
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
    // insertMovies(movies);
  }
});

app.use(express.static('client/dist'));

// -------sends all movies to client ------- //
app.get('/api/movies', (req, res) => {
  getAllMovies((err, movies) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(movies);
    }
  });
});

// -------handles search get request, returns specified movies------- //
app.get('/api/movies/movies?', (req, res) => {
  const movieQuery = req.query.movieName;
  connection.query (
    `SELECT movieName From movies WHERE movieName LIKE '%${movieQuery}%'`,
    function(err, movies) {
      if (err) {
        res.status(404).send(err);
      } else {
        res.send(movies);
      }
    }
  );
});

// -------allows addition of movie to db------- //
app.post('/api/movies', (req, res) => {
  connection.query(
    `INSERT INTO movies (movieName) VALUES('${req.body.movieName}')`,
    function(err) {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send('movie added');
      }
    }
  );
});

// ----------toggles movie between watched/to watch----------//
// app.patch()

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

exports.connection = connection;