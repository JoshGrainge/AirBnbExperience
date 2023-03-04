import React from 'react';
import collage from '../experiencesCollage.jpeg';

export default function Hero() {
  return (
    <div className="hero-container">
      <img
        className="hero-collage"
        src={collage}
        alt="collage-of-experiences"
      />
      <h1>Online Experiences</h1>
      <p className="hero-description">
        Join unique interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </div>
  );
}
