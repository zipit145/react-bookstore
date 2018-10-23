import React, { Component } from 'react';

const Search = (props) => {
    return (
      <div>
        <input onChange={props.onChange}></input>
        <button onClick={props.filterBooks}>Filter List</button>
        <button onClick={props.addToCart}>Add Selected Items to Cart</button>
      </div>
    )
  }
  
  export default Search