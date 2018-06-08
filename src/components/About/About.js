import React from 'react';
import './About.css';

export default function About() {
  return(
    <section className="about-section">
      <div className="welcome-container">
        <p className="welcome-text">Welcome! devSnips was designed for software developers by a software developer, allowing them to create notes fast and on-the-fly that contain text, images and properly formatted code.</p> 
        
        <p>This is achieved by the user inputting <a href="https://guides.github.com/features/mastering-markdown" target="_blank" rel="noopener noreferrer">markdown</a> and having our snip (our word for note) minions convert that into plain HTML behind the scenes and then presenting that back to the user. Your snips are secure and inclusive as to completely protect your privacy and data. Happy coding!</p> 
      </div>
    </section>
  );
};