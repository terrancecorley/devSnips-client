import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { logout } from '../../../actions/user';

export class HomeHeader extends Component {
  
  render() {
    if (this.props.loggedIn === false) {
      return <Redirect to="/" />
    }

    return(
      <header>
        <div>
          <h1>devSnips</h1>
        </div>
        <div>
          <p><a href="#">About</a></p>
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