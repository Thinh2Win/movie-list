// const axios = require('axios').default;
import axios from 'axios';
import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovieTitle from './AddMovieTitle.jsx';
import MovieButtons from './MovieList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [{movieName: 'Rush Hour'}],
      movieData:{},
    };
    this.handleMovieText = this.handleMovieText.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.searchForMovie = this.searchForMovie.bind(this);
    this.addMovies = this.addMovies.bind(this);
  }

  componentDidMount() {
     axios.get('/api/movies')
      .then(response => {
        this.setState({movies: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  addMovies(movieData) {
    axios.post('/api/movies', movieData)
    .then(response => {
      axios.get('/api/movies')
      .then(response => {
        this.setState({movies: response.data})
      })
    })
    .catch(err => {
      console.log(err);
    })
  }

  searchForMovie(query) {
    axios.get('/api/movies/movies', {params: {movieName: query}})
    .then(response => {
      this.setState({movies: response.data});
    });
  }

  handleMovieText (movieTitle) {
    var movieData = {
      movieName: movieTitle,
    }
    this.setState({movieData: movieData})
  }

  handleMovieSubmit () {
    this.addMovies(this.state.movieData);
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <AddMovieTitle handleMovieText={this.handleMovieText}
                  handleMovieSubmit={this.handleMovieSubmit}
        />
        <Search filterMovies={this.filterMovies}
                searchForMovie={this.searchForMovie}
        />
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}


export default App;

