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

    let errMsg;
    if (this.props.errorMsg) {
      errMsg = (<p className="login-err-msg">{this.props.errorMsg}</p>)
    }

    function showDemoCreds() {
      console.log('click func ran');
      let demoBtn = document.querySelector('#demo-btn');
      let demoCreds = document.querySelector('.demo-creds-wrapper');
      demoBtn.className = 'hide';
      demoCreds.className = 'demo-creds-wrapper'
    }

    return (
      <form role="form" className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <button className="demo-btn" id="demo-btn" onClick={() => showDemoCreds()}>Demo</button>
        <div className="hide demo-creds-wrapper">
          <h3 className="demo-creds-title">Demo Account</h3>
          <p>Username: user1</p>
          <p>Password: testtesttest</p>
        </div>
        <div>
          {errMsg}
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

const mapStateToProps = (state) => ({
    loggedIn: state.userReducer.loggedIn,
    errorMsg: state.userReducer.error
});

export default connect(mapStateToProps)(reduxForm({
  form: 'loginForm'
})(Landing));
