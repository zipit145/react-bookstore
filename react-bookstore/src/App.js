import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BookList from './components/BookList';
import Cart from './components/Cart';
import Search from './components/Search';

class App extends Component {


  constructor (props) {
    super();
    this.state ={
      books : [],
      cart : [],
      filterTerm : "",
      total : 0,
      subtotal : 0,
    }
  }
  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    const newData = json.map(item => {
      item.selected = false
      return item
    })
    this.setState({
      books:[...newData]
    })
  }

  filterBooks = (e) => {
    e.preventDefault();
    this.setState({books: this.state.books.filter(book => {
      if (this.state.filterTerm === book.author) {
        return book
      } else if (this.state.filterTerm === book.title) {
        return book
      } //else {
      //   alert("invald filter criteria");
      //   return this.state.books
      // }
    })})
  }

  selectBook = (event) => {
    this.state.books.filter(book => {
      if(event.currentTarget.id === book.title) {
        book.selected = book.selected ?  false : true
        this.setState({subtotal: this.state.subtotal + (book.selected ? book.price : (-1)*book.price)})
        return book
      }
    })
    console.log(this.state.books)
    this.setState({books: this.state.books})
  }

  addToCart = () => {
    this.setState({
      cart: this.state.books.filter(book => {
        if (book.selected === true) {
          return book
        }
      }),
    })
    this.setState({total: this.state.subtotal});
  }


  onChange = (event) => {
    this.setState({filterTerm: event.target.value});
    console.log(this.state.filterTerm)
  }


  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Search filterBooks={this.filterBooks} filterTerm={this.state.filterTerm} onChange={this.onChange} addToCart={this.addToCart}/>
          </div>
          <div className="row">
            <div className="col-md-6">
              <BookList books={this.state.books} selectBook={this.selectBook} />
            </div>
            <div className="col-md-6">
              <Cart cart={this.state.cart} total={this.state.total} newTotal={this.newTotal}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
