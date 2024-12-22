import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import ArtistPage from './ArtistPage';
import ServicePage from './ServicePage'; // Import the new ServicePage component
import App from './App';
import reportWebVitals from './reportWebVitals';
import tattooIcon from './assets/tattoo-icon.png';

import { FloatingWhatsApp } from 'react-floating-whatsapp';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import { Routes, Route } from 'react-router-dom';
import TattooCare from './TattooCare';
import PiercingCare from './PircingCare';


const chatMessage = `Hi there! 👋 Thank you for reaching out to Buena Vibra Tattoo Shop! 🎨✨

We’re excited to help you bring your tattoo ideas to life. How can we assist you today?

📅 If you'd like to schedule an appointment, let us know your preferred date and time, and we’ll get back to you with our availability.

📍 Have a specific design in mind? Feel free to share any inspiration, and we can discuss your vision!

Thank you for choosing Buena Vibra—where creativity meets passion! 🌊🌴`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Wrap the whole app with BrowserRouter */}
      <FloatingWhatsApp
        avatar={tattooIcon}
        messageDelay={2}
        notificationSound={true}
        notificationDelay={0}
        notification={true}
        phoneNumber={"50661364868"}
        accountName={"Buena Vibra Tattoo"}
        statusMessage={"Available"}
        chatMessage={chatMessage}
        placeholder={"Hi, I'm interested in booking a tattoo."}
        chatboxHeight={600}
      />
       <Routes>
        <Route path="/" element={<App />} />
        <Route path="/artist/:artistName" element={<ArtistPage />} /> {/* Dynamic route */}
        <Route path="/services/:serviceName" element={<ServicePage />} /> {/* Dynamic route */}
        <Route path="/tattoo-care" element={<TattooCare />} /> {/* Dynamic route */}
        <Route path="/piercing-care" element={<PiercingCare />} /> {/* Dynamic route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        {/* <Route path="/contact" element={<ContactPage />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
