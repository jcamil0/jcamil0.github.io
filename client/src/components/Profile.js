import React from "react";
import profileimg from "../assets/img/cj_profile.jpg";
import Personaldata from "../utils/resumeData";

import "../assets/styles/Profile.css";

const Profile = () => {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <img
            className="profile-pic"
            src={profileimg}
            alt="Nordic Giant Profile Pic"
          />
        </div>
        <div className="nine columns main-col">
          <h2>About Me</h2>

          <p>BIO</p>
          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>name</span>
                <br />
                <span>
                  street
                  <br />
                  city state, zip
                </span>
                <br />
                <span>phone</span>
                <br />
                <span>email</span>
              </p>
            </div>
            <div className="columns download">
              <p>
                <a href="#" className="button">
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
