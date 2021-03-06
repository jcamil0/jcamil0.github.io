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

  function Home() {
    return <h2>Home</h2>;
  }

  function About() {
    return <h2>About</h2>;
  }

  function Users() {
    return <h2>Users</h2>;
  }
}

export default App;
