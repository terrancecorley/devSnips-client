import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { required, checkEmpty, noSpaces, minLength, maxLength } from '../../validators';
import { reduxForm, Field, focus } from 'redux-form';
import { registerUser } from '../../actions/user';
import './SignUp.css';
import Input from '../Input/Input';

export class SignUp extends Component {
  onSubmit(values) {
    this.props.dispatch(registerUser(values))
  };

  render() {
    if (this.props.loggedIn === true) {
      return <Redirect to="/homepage" />
    }

    let error;
    if (this.props.error) {
      error = (
        <label className='validation-error'>
            {this.props.error}
        </label>
      ) 
    };

    let errMsg = this.props.errMsg;

    return (
      <form role="form" className="registration-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        {error}
        <span className="db-err-msg">{errMsg ? errMsg : ''}</span>
        <Field
          label="Username"
          placeholder="Enter a username"
          className="registration-input"
          component={Input}
          type="text"
          id="username"
          name="username"
          validate={[required, checkEmpty, noSpaces, maxLength]}
          />
        <Field
          label="Email"
          placeholder="Enter your email"
          className="registration-input"
          component={Input}
          type="email"
          id="email"
          name="email"
          validate={[required, checkEmpty, noSpaces, minLength, maxLength]}
          />
        <Field
          label="Password"
          placeholder="Enter a password"
          className="registration-input"
          component={Input}
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
    errMsg: state.userReducer.error
  });

export default connect(mapStateToProps)(reduxForm({
  form: 'registrationForm',
  onSubmitFail: (errors, dispatch) => {
    return dispatch(focus('registrationForm', 'username'));
  }
})(SignUp));