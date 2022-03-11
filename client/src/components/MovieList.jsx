import React from 'react';
var MovieList = ({movies, changeMovieList}) => (
  <ul>
    {movies.map((movies, key) => <MovieEntry key= {key} movies= {movies} changeMovieList={changeMovieList}/>)}
  </ul>
)

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
      this.props.changeMovieList(this.props.movies);
    }
  }

  render() {
    return(
      <div>
        <span>{this.props.movies.title}</span>
      <button onClick={this.handleToggleClick}>
        {this.state.Watched ? 'Watched' : 'To Watch'}
      </button>
      </div>
    )
  }
}

export default MovieList;