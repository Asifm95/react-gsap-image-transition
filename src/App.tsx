import React, { useRef, useEffect } from 'react';
import vader from './darthvader.jpg';
import gsap from 'gsap';
import './App.scss';

const App: React.FC = () => {
  return (
    <section className="main">
      <p>WELCOME TO THE DARK SIDE</p>
      <div className="container" ref={container}>
        <div>
          <div className="img-container">
            <img ref={image} src={vader} alt="vader in the house" />
            <div className="img-overlay" ref={imgReveal}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
