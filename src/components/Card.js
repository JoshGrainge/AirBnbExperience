/* eslint-disable react/prop-types */
import React from 'react';
import star from '../star.png';

export default function Card({
  image,
  starAvg,
  reviewNum,
  location,
  title,
  price,
  openSpots,
}) {
  let badgeText;
  if (openSpots === 0) badgeText = 'SOLD OUT';
  else if (location === 'Online') badgeText = 'ONLINE';

  return (
    <div className="card-container">
      <img className="thumb" src={image} alt="thumbanil" />
      <div className="star-container">
        <img className="star-icon" src={star} alt="star_icon" />
        <p>{starAvg}</p>
        <p>({reviewNum})</p>
        <p>·</p>
        <p>{location}</p>
      </div>
      <p className="card-title">{title}</p>
      <div className="pricing">
        <p>From ${price}</p>
        <p> / person</p>
      </div>
      {badgeText && (
        <div className="card-overlay">
          <p>{badgeText}</p>
        </div>
      )}
    </div>
  );
}
