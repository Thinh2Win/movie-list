import React from 'react';
import MovieList from './MovieList.jsx';
import Search from './Search.jsx';
import AddMovieTitle from './AddMovieTitle.jsx';
var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];
//keep movies and list to null to save on memory

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      addedMovies: [],
      movieText:'',
      moviesToWatch:[],

    };
    this.filterMovies = this.filterMovies.bind(this);
    this.handleMovieText = this.handleMovieText.bind(this);
    this.handleMovieSubmit = this.handleMovieSubmit.bind(this);
    this.toWatchClick = this.toWatchClick.bind(this);
    this.changeMovieList = this.changeMovieList.bind(this);
  }

  changeMovieList (newMovies) {
    this.state.moviesToWatch.push(newMovies);
  }

  handleMovieText (movieText) {
    this.setState({movieText: movieText})
  }

  handleMovieSubmit () {
    this.state.addedMovies.push({title: this.state.movieText})
    this.setState({movies: this.state.addedMovies})
  }

  filterMovies (value) {
    let filteredMovies = this.state.movies.filter((movies, index) => {
      return movies.title.toLowerCase().includes(value.toLowerCase());
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
        <MovieButtons toWatchClick={this.toWatchClick}/>
        <MovieList movies={this.state.movies} changeMovieList={this.changeMovieList}/>
      </div>
    )
  }
}

var MovieButtons = (props) => (
  <div>
    <button>Watched</button>
    <button onClick={(e) => {props.toWatchClick()}}>To Watch</button>
  </div>
)

export default App;