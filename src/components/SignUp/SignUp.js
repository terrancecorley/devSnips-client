import React from 'react';

export default function SignUp(props) {
  return (
    <form>
     <label htmlFor="username">Username</label>
     <input
      type="text"
      id="username"
      name="username"
      />
      <label htmlFor="email">Email</label>
     <input
      type="email"
      id="email"
      name="user_email"
      />
     <label htmlFor="password">Password</label>
     <input
      type="password"
      id="password"
      name="user_password"
      />
      <button type="submit">Log In</button>
      <p>Click <a href="#" rel="noopener noreferrer">here</a> to create an account.</p>
   </form>
  );
};