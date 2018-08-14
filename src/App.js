import React from 'react'
import * as BooksAPI from './BooksAPI'
import BooksPage from './BooksPage'
import SearchPage from './SearchPage'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({books})
    })
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(response => {
      BooksAPI.getAll().then(books => {
        this.setState({books})
      })
    })
  }


  render() {
    // console.log(this.state.books);
    return (
      <div className="app">
        {/*<SearchPage/>*/}
        <BooksPage
          books = {this.state.books}
          changeShelf = {this.changeShelf}
        />
      </div>
    )
  }
}

export default BooksApp
