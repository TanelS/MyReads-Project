import React, { Component } from "react";
import Shelf from "./Shelf";

class BooksPage extends Component {
  render() {
    // console.log(this.props.books);
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf 
              bookshelfTitle="Currently Reading"
              shelfSelectedBooks={this.props.books.filter(book => book.shelf === "currentlyReading")}
              changeShelf = {this.changeShelf}
            />
            <Shelf 
              bookshelfTitle="Want to Read"
              shelfSelectedBooks={this.props.books.filter(book => book.shelf === "wantToRead")}
              changeShelf = {this.changeShelf}
            />
            <Shelf 
              bookshelfTitle="Read" 
              shelfSelectedBooks={this.props.books.filter(book => book.shelf === 
              "read")}
              changeShelf = {this.changeShelf}
             />
          </div>
        </div>
      </div>
    );
  }
}

export default BooksPage;
