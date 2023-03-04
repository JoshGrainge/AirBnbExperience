import React from 'react';
import katieThumb from './Katie-Zaferes.jpeg';
import './App.css';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <Card
        image={katieThumb}
        starAvg="5.0"
        reviewNum={6}
        country="USA"
        description="Life lessons with Katie Zaferes"
        price={136}
        overlayText="SOLD OUT"
      />

      <Card
        image={katieThumb}
        starAvg="4.7"
        reviewNum="25"
        country="Canada"
        description="Another description"
        price="77"
        overlayText="ONLINE"
      />
    </div>
  );
}

export default App;
