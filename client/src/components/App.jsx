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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: movies,
      addedMovies: [],
      movieText:'',
      toWatch: [],
      watched: [],
    };
  }

  handleMovieText (movieText) {
    this.setState({movieText: movieText})
  }

  handleMovieSubmit () {
    this.state.addedMovies.push({title: this.state.movieText})
    this.setState({movies: this.state.addedMovies})
  }

  handleChange (textInput) {
    let filteredMovies = this.state.movies.filter((movies) => {
      if (movies.title.includes(textInput)) {
        return movies;
      }
    });
    this.setState({movies: filteredMovies})
  }

  handleWatchedClick() {
    this.setState({movies: this.state.watched})
  }

  handleToWatchClick() {
    this.setState({movies: this.state.toWatch})
  }

  render() {

    return (
      <div>
        <h2>Movie List</h2>
        <AddMovieTitle handleMovieText={this.handleMovieText.bind(this)}
                  handleMovieSubmit={this.handleMovieSubmit.bind(this)}
        />
        <Search handleChange={this.handleChange.bind(this)}/>
        <WatchedButton handleWatchedClick={this.handleWatchedClick.bind(this)}
                        handleToWatchClick={this.handleToWatchClick.bind(this)}
        />
        <MovieList movies={this.state.movies}/>
      </div>
    )
  }
}

var WatchedButton = ({handleWatchedClick, handleToWatchClick}) => (
      <div>
        <button onClick={(e) => this.handleWatchedClick()}>Watched</button>
        <button onClick={(e) => this.handleToWatchClick()}>To Watch</button>
      </div>
)


export default App;