import React from 'react';

export default function Landing(props) {
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
   </form>
 )
};