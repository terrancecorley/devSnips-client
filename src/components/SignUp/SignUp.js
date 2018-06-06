import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { required, checkEmpty, noSpaces, minLength, maxLength } from '../../validators';
import { reduxForm, Field } from 'redux-form';
import { registerUser, fetchLogin } from '../../actions/user';

//convert to redux form
//redirect to homepage on successfull registration

export class SignUp extends Component {
  onSubmit(values){
    const {username, password} = values;

    this.props.dispatch(registerUser(values))
  };

  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to="/homepage" />
    }

    return (
      <form
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <label htmlFor="username">Username</label>
        <Field
          component="input"
          type="text"
          id="username"
          name="username"
          />
          <label htmlFor="email">Email</label>
        <Field
          component="input"
          type="email"
          id="email"
          name="email"
          />
        <label htmlFor="password">Password</label>
        <Field
          component="input"
          type="password"
          id="password"
          name="password"
          />
        <button type="submit">Register</button>
        <p>Already have an account?<Link to="/"> Sign in</Link>.</p>
     </form>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: 'registrationForm'
})(SignUp));