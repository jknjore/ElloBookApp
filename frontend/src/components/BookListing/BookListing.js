import React from "react";
import { useSelector } from "react-redux";
import "./BookListing.scss";
import BookCard from "../BookCard/BookCard";
import { useParams } from "react-router-dom";
import { bookListTypes } from "../../redux/constants/bookConstants";
const BookListing = (props) => {
  const books = useSelector((state)=>state.booksInfo);
  let renderBooks=""
  let booksData=[]

  const {dataType} = props
  const {searchTerm} = useParams()

  if(dataType == bookListTypes.ALL_BOOKS)
    booksData = books.allBooks 
  else if(dataType == bookListTypes.SELECTED_BOOKS)
    booksData = books.assignedBooks
  else
  {
    booksData = books.allBooks.filter((book)=>book.title.toLowerCase().includes(searchTerm.toLowerCase()))
  }



  renderBooks =
  booksData.length > 0 ? (
    booksData.map((book, index) => (
        <BookCard key={`${book.title} ${book.author}`} data={book} dataType={dataType}/>
      ))
    ) : (
      <div className="books-error">
        <h5>No Books Available</h5>
      </div>
    );


  return (
    <div className="book-wrapper">
      <div className="book-list">
        <h2>{dataType}</h2>
        <div className="book-container">
          {renderBooks}
        </div>


      </div>

    </div>
  );
};

export default BookListing;
