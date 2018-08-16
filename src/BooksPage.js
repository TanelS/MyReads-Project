import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Shelf from "./Shelf";

class BooksPage extends Component {
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {/*each shelf is given its books based on the 'book.shelf' value*/}
            <Shelf
              bookshelfTitle="Currently Reading"
              shelfSelectedBooks={this.props.books.filter(
                book => book.shelf === "currentlyReading"
              )}
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              bookshelfTitle="Want to Read"
              shelfSelectedBooks={this.props.books.filter(
                book => book.shelf === "wantToRead"
              )}
              changeShelf={this.props.changeShelf}
            />
            <Shelf
              bookshelfTitle="Read"
              shelfSelectedBooks={this.props.books.filter(
                book => book.shelf === "read"
              )}
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link 
            to = '/search'
            >Add a book
          </Link>
        </div>
      </div>
    );
  }
}

export default BooksPage;
