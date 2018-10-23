import React, { Component } from 'react';

const Cart = (props) => {
  return (
    <div>
      <div>Cart</div>
        {props.cart.map(book => {
          return (
              <div className={"book"}>
                  <div>{book.title}</div>
                  <div>{book.id}</div>
                  <div>{book.author}</div>
                  <div>Pages: {book.pages}</div>
              </div>
          )
        })}
        <div>total:</div>
        <div>$ {props.total}</div>
  </div>
  )
  }
  
  export default Cart