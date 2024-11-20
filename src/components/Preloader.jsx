import React, { useEffect } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  useEffect(() => {
    const letters = document.querySelectorAll('.loading-text span'); // Include dots for spelling animation

    // GSAP animation for text spelling
    gsap.to(letters, {
      opacity: 1,
      x: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      onComplete: () => {
        const dots = document.querySelectorAll('.dot'); // Select dots for bouncing animation
        gsap.to(dots, {
          y: -20,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          stagger: 0.2, // Create a staggered bouncing effect
        });
      },
    });
  }, []);

  return (
    <div className="preloader">
      <div className="loading-text">
        <span>W</span>
        <span>e</span>
        <span>l</span>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>e</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </div>
  );
};

export default Preloader;
