import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { required, checkEmpty } from '../../validators';
import { reduxForm, Field } from 'redux-form';
import { Redirect } from 'react-router-dom';
import { fetchLogin } from '../../actions/user';

export class Landing extends Component {

  onSubmit(values){
    const { username, password } = values;
    this.props.dispatch(fetchLogin(username, password));
  }

  render() {

    if (this.props.loggedIn === true){
      return <Redirect to="/homepage" />;
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
          validate={[required, checkEmpty]}
         />
        <label htmlFor="password">Password</label>
        <Field
          component="input"
          type="password"
          id="password"
          name="password"
          validate={[required, checkEmpty]}
         />
         <button type="submit">Log In</button>
         <p>Click <Link to="/signup">here</Link> to create an account.</p>
      </form>
    );
  };
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.userReducer.loggedIn
  };
};

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm'
})(Landing));
