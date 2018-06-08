import React from 'react';
import { Link } from 'react-router-dom';
import './LandingHeader.css';

export default function LandingHeader(props) {
  return (
    <header role="banner" className="landing-header">
      <Link to="/about">About</Link>
    </header>
  )
}