import { Container, Grid } from '@material-ui/core';
import './App.css';
import Profile from './components/profile/Profile'
import Header from './components/header/Header'
import Resume from './pages/resume/Resume'
import Portfolio from './pages/portafolio/Portfolio'
import Footer from './components/footer/Footer'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className={'top_60'}>
      <Container className=''>
        <Grid container spacing={7} >
          <Grid item xs={12} sm={12} md={4} lg={3} >
            <Profile />
          </Grid>
          <Grid item xs style={{backgroundColor:'red'}}>
            <Header />

            <Router>
              <Switch>
                <Route path='/portfolio'>
                  <Portfolio />
                </Route>

                <Route path='/'>
                  <Resume />
                </Route>
              </Switch>
            </Router>
            <Footer />

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
