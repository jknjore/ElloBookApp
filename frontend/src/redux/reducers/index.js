import { combineReducers } from "redux";
import { bookReducer } from "./booksReducer";

export const reducers=combineReducers({
    booksInfo: bookReducer
})