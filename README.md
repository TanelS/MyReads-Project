# MyReads Project

This is a React project for the Udacity Front-End Web Developer Nanodegree Course. CSS and HTML bits were given by the Udacity, all JSX code is written by me in addition with component logic. 


## How to use


* install all project dependencies with `npm install` (ensure that [NodeJS](https://nodejs.org/) is installed)
* start the development server with `npm start` (or * yarn start` if you have [Yarn](https://yarnpkg.com/en/) installed).

The app displays three bookshelves:

- Currently Reading;
- Want to Read;
- Read;

The first books are preloaded from the API. User can change the shelf for the particular book by selecting new one from the green ring on the book's thumbnail lower right corner.

If user wants to add more books, the green puls button in the lower right corner of the screen has to be clicked.

The initial screen is empty, but if user starts typing in the search-box, the books corresponding to the search start apper. Du to the project specification the search-terms list is limited:

>'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS' 

The search results page can contain maximum 20 books. If the user wants to add the book to his/her shelf, then the green button on the book's cover has to be clicked with desired shelf name. The book is then "transferred" to the shelf.

If the shelf result lists a book(s) already in the user's shelf, then the shelf name is displayed at the shelf selection box (press the same green button) 

Have fun!