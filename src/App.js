import { Container, Divider, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ParticlesBg from "particles-bg";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";
import "./assets/styles/scss/bg.scss";

import "./App.css";
import Header from "./components/header";

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Header/>
      <Profile />
      <Resume />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
