import React from 'react';


var AddMovieTitle = ({handleMovieText, handleMovieSubmit}) => (
  <div>
    <label>
      <input type="text" onChange={(event) => handleMovieText(event.target.value)}/>
    </label>
    <input type="submit" value="Add" onClick={(e) => handleMovieSubmit()}/>
  </div>
)

export default AddMovieTitle;