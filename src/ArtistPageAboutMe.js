import React from 'react';
import './ArtistPageAboutMe.css'; // Import the new CSS file

const ArtistPageAboutMe = ({artist}) => {
  return (
    <>
      {/* <div className="section-divider-container"> */}
        {/* <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        /> */}
      {/* </div> */}
      <section className="artist-page-about-me-section">
        <div className="artist-page-about-me-content">
          <h1 className="artist-page-about-me-title">Hola, soy {artist.name}</h1>
          <h2 className="artist-page-about-me-subtitle">Tu artista de tatuajes personal</h2>
          <p className="artist-page-about-me-body">
            {artist.bio}
            </p>
        </div>
        <div className="artist-page-about-me-image">
          <img 
            src={`${process.env.PUBLIC_URL}/artist-image.jpg`} 
            alt="[Artist Name] - Tattoo Artist" 
          />
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
}

export default ArtistPageAboutMe;
