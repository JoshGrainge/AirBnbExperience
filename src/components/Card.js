import React from 'react';
import star from '../star.png';
import thumb from '../Katie-Zaferes.jpeg';

export default function Card() {
  return (
    <div className="card-container">
      <img className="thumb" src={thumb} alt="thumbanil" />
      <div className="star-container">
        <img className="star-icon" src={star} alt="star_icon" />
        <p>5.0</p>
        <p>(6)</p>
        <p>·</p>
        <p>USA</p>
      </div>
      <p className="card-description">Life lessons with Katie Zaferes</p>
      <div className="pricing">
        <p>From $136</p>
        <p> / person</p>
      </div>
      <div className="card-overlay">
        <p>SOLD OUT</p>
      </div>
    </div>
  );
}
