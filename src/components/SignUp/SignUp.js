import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { required, checkEmpty, noSpaces, minLength, maxLength } from '../../validators';
import { reduxForm, Field } from 'redux-form';
import { registerUser } from '../../actions/user';
import './SignUp.css';

export class SignUp extends Component {
  onSubmit(values){
    this.props.dispatch(registerUser(values))
  };

  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to="/homepage" />
    }

    let errMsg;
    if (this.props.error) {
      errMsg = (<p>{this.props.error}</p>)
    }

    console.log('error', this.props.error);

    return (
      <form role="form" className="registration-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {errMsg}
        <label 
          htmlFor="username"
          className="registration-label">
          Username
        </label>
        <Field
          placeholder="Enter a username"
          className="registration-input"
          component="input"
          type="text"
          id="username"
          name="username"
          validate={[required, checkEmpty, noSpaces, maxLength]}
          />
        <label htmlFor="email" className="registration-label">Email</label>
        <Field
          placeholder="Enter your email"
          className="registration-input"
          component="input"
          type="email"
          id="email"
          name="email"
          validate={[required, checkEmpty, noSpaces, minLength, maxLength]}
          />
        <label 
          htmlFor="password"
          className="registration-label">
          Password
        </label>
        <Field
          placeholder="Enter a password"
          className="registration-input"
          component="input"
          type="password"
          id="password"
          name="password"
          validate={[required, checkEmpty, noSpaces, minLength, maxLength]}
          />
        <button type="submit" className="registration-btn">Sign Up</button>
        <p>Already have an account?<Link to="/"> Sign in</Link>.</p>
     </form>
    );
  }
};

const mapStateToProps = (state) => ({
    loggedIn: state.userReducer.loggedIn,
    error: state.userReducer.error
  });

export default connect(mapStateToProps)(reduxForm({
  form: 'registrationForm'
})(SignUp));