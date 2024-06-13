import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div>Book Assignment System</div>
      <div>©{new Date().getFullYear()}, Ello Technology, Inc. All Rights Reserved</div>
    </div>
  );
};

export default Footer;
