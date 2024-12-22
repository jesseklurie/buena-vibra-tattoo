import React from 'react';
import './Welcome.css'; // Import the CSS file

const Welcome = () => {
  return (
    <>
      <div className="section-divider-container">
      <img 
        src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
        alt="Section Divider" 
        className="section-divider" 
      />
    </div>
    <section className="welcome-section">
      <div className="welcome-content">
        <h1 className="welcome-title">Bienvenidos a Buena Vibra Tattoo Studio</h1>
        <h2 className="welcome-subtitle">su destino para tatuajes y perforaciones.</h2>
        <p className="welcome-body">
          Más que un estudio de tatuajes, somos una familia que infunde amor y pasión en cada diseño que creamos. Nuestra misión es brindar una experiencia única y especial, ofreciendo diseños personalizados con un enfoque único para cada cliente.
          <br />
          Dedicamos nuestros esfuerzos diarios a mejorar y crecer continuamente, con el compromiso de proporcionar lo mejor a cada cliente que confía en nosotros. Nuestro trabajo es nuestro sello distintivo, demostrando nuestro compromiso con la excelencia en cada trazo.
        </p>
      </div>
      <div className="welcome-image">
        <img 
          src={`${process.env.PUBLIC_URL}/welcome-image-buena-vibra.webp`} 
          alt="Tattoo Studio" 
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
  )
}

export default Welcome;
