import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { required, checkEmpty } from '../../validators';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { fetchLogin } from '../../actions/user';
import './Landing.css';

export class Landing extends Component {

  onSubmit(values){
    const { username, password } = values;
    this.props.dispatch(fetchLogin(username, password));
  }

  render() {

    if (this.props.loggedIn === true){
      return <Redirect to="/homepage" />;
    }

    console.log('render check', this.props.error);

    return (
      <form role="form" className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div>
          <p>
            {console.log('return check', this.props.error)}
            {this.props.error ? this.props.error : ''}
          </p>
        </div>
        <label className="login-label" htmlFor="username">Username</label>
        <Field
          className="login-input"
          component="input"
          type="text"
          id="username"
          name="username"
          validate={[required, checkEmpty]}
          placeholder="Enter a username"
         />
        <label className="login-label" htmlFor="password">Password</label>
        <Field
          className="login-input"
          component="input"
          type="password"
          id="password"
          name="password"
          validate={[required, checkEmpty]}
          placeholder="Enter a password"
         />
         <button className="login-btn" type="submit">Log In</button>
         <p>Click <Link to="/signup">here</Link> to create an account.</p>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn,
    error: state.userReducer.error
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm'
})(Landing));
