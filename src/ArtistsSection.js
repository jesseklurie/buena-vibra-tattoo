import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import igIcon from './assets/ig.svg'; // Adjust path as needed

import './ArtistsSection.css';

const ArtistsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <section 
        className={`artists-section ${isVisible ? 'fly-in' : ''}`} 
        ref={sectionRef}
      >
        <h2 className="artists-title">Artistas</h2>
        <div className="artists-grid">
          {/* Artist 1 */}
          <div className="artist-card">
            <div className="artist-image">
              <img
                src={`${process.env.PUBLIC_URL}/jordan.webp`} 
                alt="Jordan Ramirez"
              />
            </div>
            {/* Use Link to route to the artist's page dynamically */}
            <h3 className="artist-name">
              <Link className="artist-name" to="/artist/jordan-ramirez">Jordan Ramirez</Link>
            </h3>
            <p className="artist-style">Neotradicional / Chicano</p>
            <a href="https://www.instagram.com/buenavibratattoocr/" target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="Instagram" />
            </a>
          </div>

          {/* Artist 2 */}
          <div className="artist-card">
            <div className="artist-image">
              <img
                src={`${process.env.PUBLIC_URL}/andrea.webp`} 
                alt="Andrea Montero"
              />
            </div>
            {/* Use Link to route to the artist's page dynamically */}
            <h3 className="artist-name">
              <Link className="artist-name" to="/artist/andrea-montero">Andrea Montero</Link>
            </h3>
            <p className="artist-style">Línea fina / Puntillismo de arrastre</p>
            <a href="https://www.instagram.com/buenavibratattoocr/" target="_blank" rel="noopener noreferrer">
              <img src={igIcon} alt="Instagram" />
            </a>
          </div>
        </div>
      </section>
      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>
    </>
  );
};

export default ArtistsSection;
