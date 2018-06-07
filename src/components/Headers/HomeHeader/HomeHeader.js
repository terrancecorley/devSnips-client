import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { logout } from '../../../actions/user';

export class HomeHeader extends Component {
  
  render() {
    if (this.props.loggedIn === false) {
      return <Redirect to="/" />
    }

    return(
      <header role="banner">
        <div>
          <h1>devSnips</h1>
        </div>
        <div>
          <p><Link to="/about">About</Link></p>
          <button onClick={() => this.props.dispatch(logout())}>Sign Out</button>
        </div>
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