import React from 'react';
var MovieList = ({movies}) => (
  <ul>
    {movies.map((movies, key) => <div key={key}>{movies.title} <Toggle/></div>)}
  </ul>
)

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggledOn: true,
    };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(prevState => ({
      isToggledOn: !prevState.isToggledOn
    }));
  }
  render() {
    return(
      <button onClick={this.handleToggleClick}>
        {this.state.isToggledOn ? 'watched' : 'To Watch'}
      </button>
    )
  }
}

export default MovieList;