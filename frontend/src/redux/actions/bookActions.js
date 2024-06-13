import axios from "axios"
import { bookUrl } from "../constants/appConstants";
import { bookConstants, fetchBookQuery } from "../constants/bookConstants";
import { setBooksStatus } from "../reducers/booksReducer";

export const addAllBooks=()=>(dispatch)=>
{
    dispatch(setBooksStatus(true,false,"Fetching Books..."))
    axios.post(bookUrl,{
        query:fetchBookQuery
    },{
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response)=>{
        dispatch({"type":bookConstants.SET_ALL_BOOKS, "data":response.data.data.books})
        dispatch(setBooksStatus(false,false,"Books Fetched Successfully"))
    }).catch((e)=>
    {
        dispatch(setBooksStatus(false,true,"Error Fetching Books "+e))
    })
}


export const addSelectedBook=(book)=>(dispatch)=>
    {
        dispatch({"type":bookConstants.ADD_SELECTED_BOOK, "data":book})
    }


export const removeSelectedBook=(book)=>(dispatch)=>
    {
        dispatch({"type":bookConstants.REMOVE_SELECTED_BOOK, "data":book})
    }