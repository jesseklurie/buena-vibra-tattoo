import React, { useEffect } from 'react';
import './AppointmentSection.css';

const AppointmentSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const appointmentSection = document.querySelector('.appointment-section');
      appointmentSection.style.backgroundPositionY = `${scrollY * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="appointment-section">
      <div className="content">
        <h1 className="appointment-title">AGENDA TU CITA</h1>
        <p className="subtitle">Obtén un 10% de descuento</p>
        <button className="cta-button">RESERVAR MI TATUAJE</button>
      </div>
    </div>
  );
};

export default AppointmentSection;