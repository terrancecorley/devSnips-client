import React from 'react';

export default class Input extends React.Component{
  componentDidUpdate(prevProps){
      if(!prevProps.meta.active && this.props.meta.active){
          this.input.focus();
      }
  }
  render(){
      let error;
      if (this.props.meta.error && this.props.meta.touched){
        error = (
          <label className='formError'>
            {this.props.meta.error}
          </label>
        )
      }

      let placeholderText;
      if (this.props.input.name === 'username') {
        placeholderText = 'Enter a username';
      } else if (this.props.input.name === 'email') {
        placeholderText = 'Enter your email';
      } else if (this.props.input.name === 'password') {
        placeholderText = 'Enter a password';
      }

      return(
      <React.Fragment>
        <label className="registration-label">{error ? this.props.input.name : ''}</label>
        <label 
          htmlFor={this.props.input.name} 
          className={error ? 'validation-error' : 'registration-label'}
        >
          {error ? error : this.props.label}
        </label>
        <input 
          placeholder={placeholderText}
          className="registration-input"
          {...this.props.input}
          id={this.props.input.name}
          type={this.props.type}
          ref={input => (this.input = input)}
        />
      </React.Fragment>
    );
  }
}