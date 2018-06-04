import React from 'react';
import { Link } from 'react-router-dom';

export default function Landing(props) {
  //if user signed in set redirect to snips

 return (
   <form>
     <label htmlFor="username">Username</label>
     <input
      type="text"
      id="username"
      name="username"
      />
     <label htmlFor="password">Password</label>
     <input
      type="password"
      id="password"
      name="user_password"
      />
      <button type="submit">Log In</button>
      <p>Click <Link to="/signup">here</Link> to create an account.</p>
   </form>
 );
};