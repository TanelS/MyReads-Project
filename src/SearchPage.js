import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import escapeRegExp from "escape-string-regexp";
import Book from "./Book";

class SearchPage extends Component {
  state = {
    searchTerm: "",
    searchResults: []
  };

  /**
   * Determines if the book in search results exist in the shelves.
   * If exists, then function returns its shelf name, if not, then
   * just 'nine' value
   * @param searchedBook - a book, which is given my search result
   * @returns {string}
   */
  setSearchedBooksShelf(searchedBook) {
    let shelf = "none";
    for (let book of this.props.books) {
      if (book.id === searchedBook.id) {
        shelf = book.shelf;
      }
    }
    return shelf;
  }

  /**
   * Performs book search with given API method: BooksAPI.search(query).
   * The cases, when the reply contains either empty array or undefined
   * are excluded.
   * The 'query' is filtered fot unwanted symbols by escapeRegExp().
   * @param query - search string from the input field
   */
  searchBooks(query) {
    if (escapeRegExp(query)) {
      BooksAPI.search(query).then(searchResults => {
        if (searchResults.error || !searchResults) {
          this.setState({ searchResults: [] });
        } else {
          searchResults.map(
            result => (result.shelf = this.setSearchedBooksShelf(result))
          );
          this.setState({ searchResults });
        }
      });
    } else {
      this.setState({ searchResults: [] });
    }
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={event => this.searchBooks(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults.map(book => (
              <li key={book.id}>
                <Book book={book} changeShelf={this.props.changeShelf} />
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
