import React from 'react';

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
    // setState is an asynchronous property, when JS gets to a line that is asynchronous, JS will run this
    // like it runs setTimeout, so this will be invoked later
    // so when setState runs later, this will point to the window object, so we must bind the function
    // which was done in the constructor line 19
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.filterMovies(this.state.term)
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
