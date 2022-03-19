import React from 'react';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      // movies: this.props.movies,

    }
  }

  render() {
    return (
      <div>
        <MovieButtons toWatchClick={this.toWatchClick}/>
      <ul>
        {this.props.movies.map((movie, key) => <MovieEntry key= {movie.movieName} movies= {movie} />)}
      </ul>
      </div>
    )
  }
}

class MovieEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Watched: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick(e) {
    this.setState(prevState => ({
      Watched: !prevState.Watched
    }));
    if (this.state.Watched) {
      // this.props.changeMovieList();
    }
    // else if clicked again, remove movie from list?
  }

  render() {
    return(
      <div>
        <span>{this.props.movies.movieName}</span>
      <button onClick={this.handleToggleClick}>
        {this.state.Watched ? 'Watched' : 'To Watch'}
      </button>

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
export default MovieList;