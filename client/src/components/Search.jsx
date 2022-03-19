import React from 'react';
import axios from 'axios';
class Search extends React.Component {
  constructor(props) {
    super(props);

     this.state = {
      term: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ term: event.target.value})

  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchForMovie(this.state.term);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          ></input>
            <input type="submit" value="Go!">
          </input>
        </form>
      </div>
    )
  }
}
export default Search;
