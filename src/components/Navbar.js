import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Home, Telegram } from "@material-ui/icons";

import Personaldata from "../utils/resumeData";
import CustomButton from "../components/Button";

import "../assets/styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = (props) => {
  const pathName = props?.location?.patname;

  return (
    <Navbar bg="white" expand="lg" sticky='top'>
      <Navbar.Brand href="/">
        <Home />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            as={NavLink}
            to="/"
            // eventKey="1"
            // className={
            //   pathName === "/" ? "header_link_activate" : "header_link"
            // }
          >
            Resume
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            // eventKey="2"
            // className={
            //   pathName === "/" ? "header_link_activate" : "header_link"
            // }
          >
            Porfolio
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/about"
            // eventKey="2"
            // className={
            //   pathName === "/" ? "header_link_activate" : "header_link"
            // }
          >
            Contacto
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(Personaldata.social).map((keys) => (
            <a href={Personaldata.social[keys].link} target="_blank">
              {Personaldata.social[keys].icon}
            </a>
          ))}
          <CustomButton text="hire me" icon={<Telegram />} />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
