import React from "react";
import "./BookDetail.scss";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import { addSelectedBook } from "../../redux/actions/bookActions";
import { Button } from "@mui/material";

const BookDetail = () => {
  const dispatch = useDispatch();
  const assignedBooks = useSelector((state)=>state.booksInfo.assignedBooks)
  const { title,author } = useParams();
  console.log("author")
  console.log(author)
  const isBookAssigned = (assignedBooks.filter(x=>x.title == title && x.author == author)).length > 0;

  const books = useSelector((state)=>state.booksInfo);
  const booksData = books.allBooks

  const bookList = [...booksData.filter(x=>x.title == title)]
  var book = {}

  if(bookList.length != 0)
    {
      book = bookList[0]
    }

    const addBook =(selectedBook)=>
      {
        dispatch(addSelectedBook(selectedBook))
      }

      
  return (
    <div className="book-section">
      {Object.keys(book).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="book-title">{book.title}</div>
            <div className="book-info">
              <div>
                <span>Author</span>
                <span>{book.author}</span>
              </div>
              <div>
                <span>Level</span>
                <span>{book.readingLevel}</span>
              </div><br /><br />

             
                <span><Button color={isBookAssigned ? "success" : "primary"} onClick={()=>addBook({...book})} className="addtolib" startIcon={<LibraryAddIcon/>} variant="contained" title="Add to Reading List">{isBookAssigned ? "Added to List" : "Add to List"}</Button></span>
           
            </div>
          </div>
          <div className="section-right">
          <img src={`/${book.coverPhotoURL}`} alt={book.title} style={{width:"70%",height:"70%"}} />
          </div>
        </>
      )}
    </div>
  );
};

export default BookDetail;
