import { useDispatch } from "react-redux";
import { bookConstants } from "../constants/bookConstants";

const initialState = {
allBooks:[],
assignedBooks:[],
status:{
    isLoading:false,
    error:"",
    message:""
}
}

export const bookReducer=(state=initialState,{type,data})=>
    {
        switch (type) {
            case bookConstants.SET_ALL_BOOKS:
                return {...state, allBooks:data}
            case bookConstants.ADD_SELECTED_BOOK:
                const bookExistsArr = state.assignedBooks.filter(x=>x.title == data.title && x.author == data.author)
                if(bookExistsArr.length == 0)
                return {...state, assignedBooks:[...state.assignedBooks,data]}
                else
                return state
            case bookConstants.REMOVE_SELECTED_BOOK:
                const books = state.assignedBooks.filter(x=>x.title != data.title && x.author != data.author)
                return {...state, assignedBooks:books}
            case bookConstants.SET_BOOKS_STATUS:
                return {...state, status:data}  
            default:
                return state;
        }
    }


    export const setBooksStatus=(isLoading, error, message)=>
    {
        return {"type":bookConstants.SET_BOOKS_STATUS, "data":{isLoading:isLoading,error:error,message:message}}
    }