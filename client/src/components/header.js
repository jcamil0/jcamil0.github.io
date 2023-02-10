import React , { useState, useEffect } from "react";
import Personaldata from "../utils/resumeData";
import Navbar from '../components/Navbar'
import "../assets/styles/header.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/profiles")
      .then(response => response.json())
      .then(data => {
        setProfiles(data.data);
      });
  }, []);

  return (
    <ul>
      {profiles.map(profile => (
        <li key={profile.id}>
          {profile.attributes.firstname} {profile.attributes.lastname}
        </li>
      ))}
    </ul>
  );
};

export default Profiles;
