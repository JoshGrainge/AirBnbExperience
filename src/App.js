import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';
import cardData from './cardData';

function App() {
  const cards = cardData.map((item) => <Card key={item.id} item={item} />);

  return (
    <div>
      <Nav />
      <Hero />
      <div className="card-list">{cards}</div>
    </div>
  );
}

export default App;
