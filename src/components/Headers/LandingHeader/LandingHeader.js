import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingHeader(props) {
  return (
    <header role="banner">
      <Link to="/about">About</Link>
    </header>
  )
}