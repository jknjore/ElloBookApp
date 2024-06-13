import React from "react";
import { Link } from "react-router-dom";
import "./BookCard.scss";
import { Button, createTheme } from "@mui/material";
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { addSelectedBook, removeSelectedBook } from "../../redux/actions/bookActions";
import { bookListTypes } from "../../redux/constants/bookConstants";

const BookCard = (props) => {
  const dispatch = useDispatch();
  const assignedBooks = useSelector((state)=>state.booksInfo.assignedBooks)
  const { data,dataType } = props;
  const isBookAssigned = (assignedBooks.filter(x=>x.title == data.title  && x.author == data.author)).length > 0;

  const addBook =(selectedBook)=>
    {
      dispatch(addSelectedBook(selectedBook))
    }

    const removeBook =(selectedBook)=>
      {
        dispatch(removeSelectedBook(selectedBook))
      }

      const theme = createTheme({
        components: {
          MuiIcon: {
            styleOverrides: {
              root: {
                boxSizing: 'content-box',
                padding: 3,
                fontSize: '1.125rem',
              },
            },
          },
        },
      });

  return (<div className="card-item">
        <div className="card-inner">
        <Link to={`/book/${data.title}/${data.author}`}>
          <div className="card-top">
            <img src={`/${data.coverPhotoURL}`} alt={data.title} />
          </div>
          </Link>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.title}</h4><br />
              <h5>Author: {data.author}</h5>
              <h5>Level: {data.readingLevel}</h5>
            </div>
            
          </div>
        </div>
        
        {
          dataType == bookListTypes.ALL_BOOKS || dataType == bookListTypes.SEARCH_RESULTS  ? 
          <Button color={isBookAssigned ? "success" : "primary"} onClick={()=>addBook({...data})} className="addtolib" startIcon={<LibraryAddIcon/>} variant="contained" title="Add to Reading List">{isBookAssigned ? "Added" : "Add"}</Button>
          :
          <Button color="error" onClick={()=>removeBook({...data})} className="addtolib" startIcon={<DeleteIcon />} variant="contained" title="Remove from Reading List">Remove</Button>
        }
        
    </div>
    
  );
};

export default BookCard;
