import React from 'react';
import { Link } from 'react-router-dom';
import './AboutHeader.css';

export default function AboutHeader(props) {
  return (
    <header role="banner" className="about-header">
      <Link to="/">Home</Link>
    </header>
  )
}