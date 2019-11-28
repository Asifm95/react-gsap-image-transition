import React, { useRef, useEffect } from 'react';
import vader from './darthvader.jpg';
import gsap from 'gsap';
import './App.scss';

const App: React.FC = () => {
  let image = useRef<HTMLImageElement | null>(null);
  let container = useRef<HTMLDivElement | null>(null);
  let imgReveal = useRef<HTMLDivElement | null>(null);
  let tl = gsap.timeline();
  useEffect(() => {
    if (container.current && image.current && imgReveal.current) {
      tl.to(container.current, { duration: 0, css: { visibility: 'visible' } })
        .to(imgReveal.current, {
          duration: 1.3,
          width: '0%',
          ease: 'Power2.easeInOut'
        })
        .from(image.current, {
          duration: 1.2,
          scale: 1.6,
          ease: 'Power2.easeIn',
          delay: -1.3
        });
    }
  });
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
