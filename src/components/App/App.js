import React, { Component } from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import LandingHeader from '../Headers/LandingHeader/LandingHeader';
import Landing from '../Landing/Landing';
import HomeHeader from '../Headers/HomeHeader/HomeHeader';
import SignUp from '../SignUp/SignUp';
import Footer from '../Footer/Footer';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from '../Homepage/Homepage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Route exact path="/" component={LandingHeader} />
          <Route exact path="/homepage" component={HomeHeader} />
          
          <Banner />
          <main>
            <Route exact path="/" component={Landing} />
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
