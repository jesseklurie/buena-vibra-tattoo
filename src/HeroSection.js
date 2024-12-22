import React, { useEffect, useState } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section 
      className="hero-section" 
      style={{ backgroundPositionY: `${scrollPosition * 0.5}px` }}
    >
      {/* <img 
        src={`${process.env.PUBLIC_URL}/buenaVibraHero.webp`} 
        alt="Hero Image" 
        className="hero-image" 
      /> */}
      {/* <img 
        src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
        alt="Section Divider" 
        className="section-divider" 
      /> */}
    </section>
  );
};

export default HeroSection;
