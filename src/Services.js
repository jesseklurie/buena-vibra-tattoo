// src/components/ServicesSection.jsx
import React, { useEffect, useState } from 'react';
import './Services.css';
import tattooIcon from './assets/tattoo-icon.png'; // Adjust path as needed
import piercingIcon from './assets/piercing-icon.png'; // Adjust path as needed
import catalogIcon from './assets/catalog-icon.png'; // Adjust path as needed
import careIcon from './assets/care-icon.png'; // Adjust path as needed
import { Link } from 'react-router-dom';
const Services = () => {
  const services = [
    { icon: tattooIcon, label: 'Tatuajes', link:"/" },
    { icon: piercingIcon, label: 'Piercings', link:"/"},
    { icon: piercingIcon, label: 'Cuidado de Piercings', link:"/piercing-care" },
    { icon: careIcon, label: 'Cuidado de Tatuaje', link:"/tattoo-care" },
  ];

  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.service-item');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setVisibleItems((prev) => {
            if (!prev.includes(index)) {
              return [...prev, index]; // Add index to visible items
            }
            return prev;
          });
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check immediately on load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (

    <>
     <h2 className="services-title">Tinta y Creatividad</h2>
    <section className="services-section">
      {services.map((service, index) => (
        <div 
          key={index} 
          className={`service-item ${visibleItems.includes(index) ? 'animate' : ''}`}
          style={{ transitionDelay: `${index * 0.14}s` }} // Increased delay to 0.14 seconds
        >
          <div className="icon-container">
            <img src={service.icon} alt={service.label} />
          </div>
          {/* <p className='service-label'>{service.label}</p> */}
          <Link className="artist-name" to={service.link}><p className='service-label'>{service.label}</p></Link>
        </div>
      ))}
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

export default Services;
