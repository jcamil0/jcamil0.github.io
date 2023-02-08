import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";
import Header from "./components/header";
import React from 'react';
import "./App.css";

function App() {
  return (
    <>
      <Header/>

<Profile/>
<Footer/>
<Resume/>
<Portfolio/>
<Contact/>
     
    </>
  );
}

export default App;
