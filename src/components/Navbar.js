import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Home, Telegram } from "@material-ui/icons";

import Personaldata from "../utils/resumeData";
import CustomButton from "../components/Button";

import "../assets/styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@material-ui/core";

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
      <Navbar.Brand as={NavLink} to="/">
        <Home className="icon" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/">
              <Typography variant="h6">Resume</Typography>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio">
              <Typography variant="h6">Portafolio</Typography>
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              <Typography variant="h6">Contacto</Typography>
            </Nav.Link>
          </Nav>

        <div className="header_right">
          {Object.keys(Personaldata.social).map((keys) => (
            <a href={Personaldata.social[keys].link} target="_blank">
              {Personaldata.social[keys].icon}
            </a>
          ))}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
