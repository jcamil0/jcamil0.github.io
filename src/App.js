import { Container, Grid } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile";
import Header from "./components/Header";
import Resume from "./pages/resume/Resume";
import Footer from "./components/Footer";

import "./App.css";

import Portfolio from "./pages/portafolio/Portfolio";

function App() {
  return (
    <div className={"top_60"}>
      <Container className="">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={12} md={4} lg={3}>
            <Profile />
          </Grid>
          <Grid item xs>
            <Router>
              {/* <Header /> */}
              <div className="main-content container_shadow">
                <Switch>
                  <Route path="/portfolio">
                    <Portfolio />
                  </Route>
                  <Route path="/">
                    <Resume />
                  </Route>
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
