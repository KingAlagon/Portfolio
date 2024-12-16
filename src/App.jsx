import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import './index.css';
import Preloader from './components/Preloader';
import Header from './components/Header';
import Introduction from './components/Introduction';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';

function App() {
  const [loading, setLoading] = useState(true);
  const headerRef = useRef(null);
  const introRef = useRef(null);

  useEffect(() => {
    if (!loading) {
      const timeline = gsap.timeline();

      timeline
        .fromTo(
          headerRef.current,
          { opacity: 0, y: -50, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'power3.out' }
        )
        .fromTo(
          introRef.current,
          { opacity: 0, y: 50, blur: 10 },
          { opacity: 1, y: 0, blur: 0, duration: 1.2, ease: 'power3.out' },
          '-=0.8'
        );
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-800">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div ref={headerRef}>
            <Header />
          </div>
          <div ref={introRef}>
            <Introduction />
          </div>
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App;
