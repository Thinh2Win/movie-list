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
      addedMovies: [],
      movieText:'',
    };
    this.filterMovies = this.filterMovies.bind(this);
    this.handleMovieText = this.handleMovieText.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.toWatchClick = this.toWatchClick.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);
  }

  componentDidMount() {
    axios.get('/api/movies')
      .then(response => {
        console.log(response.data);
        this.setState({movies: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }

  changeMovieList (ToggledMovies) {
    // if moviesToWatch contains newMovies
    // remove newMovies from moviesToWatch array
    // else push new movies into moviesToWatch array

    // let newArray = this.state.moviesToWatch;
    // newArray.push(newMovies);
    this.setState({
      moviesToWatch: ToggledMovies
    });
  }

  handleMovieText (movieText) {
    this.setState({movieText: movieText})
  }

  handleMovieSubmit () {
    this.state.addedMovies.push({movieName: this.state.movieText})
    this.setState({movies: this.state.addedMovies})
  }

  filterMovies (value) {
    let filteredMovies = this.state.movies.filter((movies, index) => {
      return movies.movieName.toLowerCase().includes(value.toLowerCase());
    });
    this.setState({movies: filteredMovies})
  }

  toWatchClick () {
    this.setState({movies: this.state.moviesToWatch})
  }

  render() {
    return (
      <div>
        <h2>Movie List</h2>
        <AddMovieTitle handleMovieText={this.handleMovieText}
                  handleMovieSubmit={this.handleMovieSubmit}
        />
        <Search filterMovies={this.filterMovies}/>
        <MovieList movies={this.state.movies}
          changeMovieList={this.changeMovieList}
          toWatchClick={this.toWatchClick}
        />
      </div>
    )
  }
}


export default App;