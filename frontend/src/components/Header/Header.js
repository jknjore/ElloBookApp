import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import SearchBooks from "../Search/SearchBook";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Ello - Book Assignment System</Link>
      </div>
      <div>
      <Link  className="tabs" to="/" >Books Catalogue</Link>  
      
      <Link className="tabs" to="/selected-books"> Selected Books</Link>
      </div>
      <div className="search-bar">
          <SearchBooks />
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
