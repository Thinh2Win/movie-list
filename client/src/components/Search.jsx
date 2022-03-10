import React from 'react';

var Search = ({handleChange}) => (
  <div>
    <label>
      <input type="text" onChange={ (event) => handleChange(event.target.value)}/>
    </label>
    <input type="submit" value="GO!"/>
  </div>
)

export default Search;