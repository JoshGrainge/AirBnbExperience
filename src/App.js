import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

function App() {
  const cards = cardData.map((d) => (
    <Card
      key={d.id}
      title={d.title}
      price={d.price}
      image={`./images/${d.coverImg}`}
      starAvg={d.stats.rating}
      reviewNum={d.stats.reviewCount}
      location={d.location}
      overlayText={d.openSpots > 0 ? undefined : 'SOLD OUT'}
    />
  ));

  return (
    <div>
      <Nav />
      <Hero />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
