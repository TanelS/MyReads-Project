import React from "react";
import * as BooksAPI from "./BooksAPI";
import BooksPage from "./BooksPage";
import SearchPage from "./SearchPage";
import { Route } from "react-router-dom";
import "./App.css";

class BooksApp extends React.Component {
  state = {
    books: [],
  };

  /**
   * Gets the books from the API
   */
  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  /**
   * Sets the book's shelf after the user changes it.
   * @param book - the book which user selects
   * @param shelf - the desired shelf
   */
  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      BooksAPI.getAll().then(books => {
        this.setState({ books });
      });
    });
  };

  render() {
    return (
      <div className="app">
        <Route
          exact path="/"
          render={() => (
            <BooksPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />  
          )}
        />

        <Route 
          path="/search" 
          render={() => (
            <SearchPage
              books={this.state.books}
              changeShelf={this.changeShelf}
            />
          )}  
          />
      </div>
    );
  }
}

export default BooksApp;
