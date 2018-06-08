import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { logout } from '../../../actions/user';
import './HomeHeader.css';

export class HomeHeader extends Component {
  
  render() {
    if (this.props.loggedIn === false) {
      return <Redirect to="/" />
    }

    return(
      <header role="banner" className="homepage-header">
          <h1 className="logo homepage-logo">
            <span className="logo-d">d</span>
            <span className="logo-e">e</span>
            <span className="logo-v">v</span>
            <span className="logo-S">S</span>
            <span className="logo-n">n</span>
            <span className="logo-i">i</span>
            <span className="logo-p">p</span>
            <span className="logo-s">s</span>
          </h1>
          <button className="sign-out-btn" onClick={() => this.props.dispatch(logout())}>Sign Out</button>
      </header>
    );
  }
};


const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

export default connect(mapStateToProps)(HomeHeader);