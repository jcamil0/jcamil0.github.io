import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/contact";
import "./assets/styles/scss/bg.scss";
import "./App.css";
function App() {
  return (
    <div className="top_60" >
      <Container>
        <Grid container spacing={6}>
          <Grid item xs={20} sm={12} md={4} lg={4}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              <Navbar />
              <div className="main-content container_shadow">
                <Switch>
                  <Route path="/portfolio" component={Portfolio}/>
                  <Route path="/about" component={Contact}/>
                  <Route path="/" component={Resume}/>
                </Switch>
              </div>
            </Router>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;

// import React from "react";
// import emailjs from "emailjs-com";

// // import './ContactUs.css';

// export default function ContactUs() {
//   function sendEmail(e) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_r5iomli",
//         "template_3491al9",
//         e.target,
//         "user_uZ8p03pidCoXyklMoUhQR"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//   }

//   return (
//     <form className="contact-form" onSubmit={sendEmail}>
//       <input type="hidden" name="contact_number" />
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// }
