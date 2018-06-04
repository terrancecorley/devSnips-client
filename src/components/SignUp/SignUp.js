import React from 'react';
import { Link } from 'react-router-dom';

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
      <button type="submit">Register</button>
      <p>Already have an account?<Link to="/"> Sign in</Link>.</p>
   </form>
  );
};