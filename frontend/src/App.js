import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import "./App.scss";
import BookListing from "./components/BookListing/BookListing";
import BookDetail from "./components/BookDetail/BookDetail";
import { bookListTypes } from "./redux/constants/bookConstants";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/"  element={<Home />}>
            <Route index  element={<BookListing  dataType={bookListTypes.ALL_BOOKS}/>}/>
            <Route path="/book/:title/:author"  element={<BookDetail />}/>
            <Route path="/selected-books"  element={<BookListing  dataType={bookListTypes.SELECTED_BOOKS}/>} />
            <Route path="/search-books/:searchTerm"  element={<BookListing  dataType={bookListTypes.SEARCH_RESULTS}/>} />
            <Route element={<PageNotFound />} />
            </Route>
          </Routes>
        </div>
        <Footer className="footer" />
      </Router>
    </div>
  );
}

export default App;
