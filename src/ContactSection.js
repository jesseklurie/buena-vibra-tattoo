import React from 'react';
import fbIcon from './assets/fb.svg'; // Adjust path as needed
import igIcon from './assets/ig.svg'; // Adjust path as needed
import waIcon from './assets/wa.svg';
import timeIcon from './assets/access_time.svg'; // Adjust path as needed
import locationIcon from './assets/location_on.svg'; // Adjust path as needed
import mailIcon from './assets/mail_outline.svg';

import './ContactSection.css'; // Import the CSS file for styling

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="content">
        <h1 className="contact-title">CONTÁCTENOS</h1>
        <div className="contact-info">
          <div className="social-icons">
            {/* WhatsApp */}
            <div className="contact-icon">
              <a href="https://wa.me/50661364868" target="_blank" rel="noopener noreferrer">
                <img src={waIcon} alt="Phone" />
                <p>(+506) 6136-4868</p>
              </a>
            </div>
            {/* Location */}
            <div className="contact-icon">
              <a href="https://www.google.com/maps/search/?api=1&query=Buena+Vibra+Tattoo+Shop,+Jaco,+Costa+Rica" target="_blank" rel="noopener noreferrer">
                <img src={locationIcon} alt="Location" />
                <p>Jaco, Costa Rica</p>
              </a>
            </div>
            {/* Instagram */}
            <div className="contact-icon">
              <a href="https://www.instagram.com/buenavibratattoocr/" target="_blank" rel="noopener noreferrer">
                <img src={igIcon} alt="Instagram" />
                <p>@buenavibratattoocr</p>
              </a>
            </div>
            {/* Facebook */}
            <div className="contact-icon">
              <a href="https://www.facebook.com/buenavibratattoocr" target="_blank" rel="noopener noreferrer">
                <img src={fbIcon} alt="Facebook" />
                <p>buenavibratattoocr</p>
              </a>
            </div>
            {/* Email */}
            <div className="contact-icon">
              <a href="mailto:jxtattoo21@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={mailIcon} alt="Email" />
                <p>yjxtattoo21@gmail.com</p>
              </a>
            </div>
            {/* Hours */}
            <div className="contact-icon">
              <img src={timeIcon} alt="Hours" />
              <p>Walk in tattoo 11am to 9pm</p>
            </div>
          </div>
          <div className="map">
            {/* Google Maps iframe */}
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed/v1/place?q=Buena+Vibra+Tattoo+Shop,+Jacó,+Costa+Rica&key=AIzaSyAJYZQY7WMGNGpeXCt2BrjIVWDqaxSPF0Q"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;