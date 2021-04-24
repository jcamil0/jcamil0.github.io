import React from "react";
import {
  Form,
  Nav,
  Navbar,
  NavDropdown,
  Button,
  FormControl,
} from "react-bootstrap";
import { Home } from "@material-ui/icons";

import Personaldata from "../utils/resumeData";

import "../assets/styles/header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Typography } from "@material-ui/core";
import ParticlesBg from "particles-bg";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;

{
  /* <div className="header_right">
          {Object.keys(Personaldata.social).map((keys) => (
            <a href={Personaldata.social[keys].link} target="_blank">
              {Personaldata.social[keys].icon}
            </a>
          ))}
        </div> */
}
