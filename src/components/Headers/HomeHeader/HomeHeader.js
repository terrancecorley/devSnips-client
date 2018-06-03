import React from 'react';

export default function HomeHeader(props) {
  return(
    <header>
      <div>
        <h1>devSnips</h1>
      </div>
      <div>
        <p><a href="#">About</a></p>
        <button>Sign Out</button>
      </div>
    </header>
  );
};