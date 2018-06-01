import React, { Component } from 'react';
import './App.css';
import Banner from '../Banner/Banner';
import LandingHeader from '../Headers/LandingHeader/LandingHeader';
import Landing from '../Landing/Landing';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <LandingHeader />
        <Banner />
        <main>
          <Landing />
        </main>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;
