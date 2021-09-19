import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVimeoV } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className=" footer container-fluid">
      <div className="container row">
        <div className="icons col">
          <FontAwesomeIcon icon={faVimeoV} size="2x" />
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </div>
        <div className="footer-text col">
          <p>hello@yay.com</p>
          <p>Copyright 2020</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
