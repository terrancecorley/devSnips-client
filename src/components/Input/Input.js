import React from 'react';

export default class Input extends React.Component{
  componentDidUpdate(prevProps){
      if(!prevProps.meta.active && this.props.meta.active){
          this.input.focus();
      }
  }
  render(){
      //you validate in the input and you have to do it to the login 
      //as well you also have to make when there is an error it takes
      //you to the input as well
      let error;
      if(this.props.meta.error && this.props.meta.touched){
          error = (
              <label className='formError'>
                  {this.props.meta.error}
              </label>
          )
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
                // add dynamic placeholders
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