import React from "react";
import "../assets/styles/header.css";
import Personaldata from "../utils/resumeData";

function header() {
  return (
    <header>
      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">
            {Personaldata.profile.firstname} 
            {Personaldata.profile.lastname}
          </h1>
          <h3>{Personaldata.profile.summary} </h3>
          <hr />
          <ul className="social">
            <a href={""} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={""} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default header;
