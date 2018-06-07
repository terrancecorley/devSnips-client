import React, { Component } from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import LandingHeader from '../Headers/LandingHeader/LandingHeader';
import Landing from '../Landing/Landing';
import HomeHeader from '../Headers/HomeHeader/HomeHeader';
import AboutHeader from '../Headers/AboutHeader/AboutHeader';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import About from '../About/About';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={LandingHeader} />
          <Route exact path="/signup" component={LandingHeader} />
          <Route exact path="/homepage" component={HomeHeader} />
          <Route exact path="/about" component={AboutHeader} />

          <Route exact path="/" component={Banner} />
          <Route exact path="/about" component={Banner} />
          <Route exact path="/signup" component={Banner} />


          <main>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/homepage" component={Homepage} />
          </main>
          <Footer />
        </React.Fragment>
      </Router>
    );
  };
};

export default App;
