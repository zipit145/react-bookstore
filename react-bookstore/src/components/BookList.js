import React from 'react';

const BookList = (props) => {
    return (
      <div>
          {props.books.map(book => {
            return (
                <div className={"book " + (book.selected ? 'active' : '')} onClick={props.selectBook} id={book.title}>
                    <div>{book.title}</div>
                    <div>{book.id}</div>
                    <div>{book.author}</div>
                    <div>Pages: {book.pages}</div>
                </div>
            )
          })}
          {console.log(props.books)}
        BookList
      </div>
    )
  }
  
  export default BookList