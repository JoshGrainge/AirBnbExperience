/* eslint-disable react/prop-types */
import React from 'react';
import star from '../star.png';

export default function Card({
  image,
  starAvg,
  reviewNum,
  country,
  description,
  price,
  overlayText,
}) {
  return (
    <div className="card-container">
      <img className="thumb" src={image} alt="thumbanil" />
      <div className="star-container">
        <img className="star-icon" src={star} alt="star_icon" />
        <p>{starAvg}</p>
        <p>({reviewNum})</p>
        <p>·</p>
        <p>{country}</p>
      </div>
      <p className="card-description">{description}</p>
      <div className="pricing">
        <p>From ${price}</p>
        <p> / person</p>
      </div>
      <div className="card-overlay">
        <p>{overlayText}</p>
      </div>
    </div>
  );
}
