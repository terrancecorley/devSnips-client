import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Landing extends Component {
  //if user signed in set redirect to snips

  render() {
    return (
      <form>
        <label htmlFor="username">Username</label>
        <input
         type="text"
         id="username"
         name="username"
         />
        <label htmlFor="password">Password</label>
        <input
         type="password"
         id="password"
         name="user_password"
         />
         <button type="submit">Log In</button>
         <p>Click <Link to="/signup">here</Link> to create an account.</p>
      </form>
    );
  }
};

const mapStateToProps = (state) => ({
  token: state.userReducer.token
});

export default connect(mapStateToProps)(Landing);