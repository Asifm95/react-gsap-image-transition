import React, { useRef, useEffect } from 'react';
import vader from './darthvader.webp';
import gsap from 'gsap';
import './App.scss';

const App: React.FC = () => {
  let image = useRef<HTMLImageElement | null>(null);
  let container = useRef<HTMLDivElement | null>(null);
  let titleContainer = useRef<HTMLDivElement | null>(null);
  let imgReveal = useRef<HTMLDivElement | null>(null);
  let title = useRef<HTMLDivElement | null>(null);
  let tl = gsap.timeline();
  useEffect(() => {
    if (
      container.current &&
      image.current &&
      imgReveal.current &&
      title.current &&
      titleContainer.current
    ) {
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
        })
        .from(
          titleContainer.current,
          {
            duration: 1.1,
            scaleX: 0,
            ease: 'back.out(1)'
          },
          '-=0.2'
        )
        .from(title.current, {
          duration: 1.2,
          y: 50,
          ease: 'back.out(1)'
        });
    }
  });
  return (
    <section className="main" ref={container}>
      <div className="title-container">
        <div className="title-layer" ref={titleContainer}>
          <p className="title" ref={title}>
            WELCOME TO THE DARK SIDE
          </p>
        </div>
      </div>
      <div className="container">
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
