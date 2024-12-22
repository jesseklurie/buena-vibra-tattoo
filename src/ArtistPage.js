import React from 'react';
import { useParams } from 'react-router-dom';
import ArtistPageAboutMe from './ArtistPageAboutMe';
import './ArtistPage.css';  // Import the updated CSS file


// A sample artist data object (could be replaced with dynamic data from a server or API)
const artistInfo = {
  "jordan-ramirez": {
    name: "Jordan Ramirez",
    image: "jordan.webp", // Use your actual image path here
    style: "Neotradicional / Chicano",
    bio: "Jordan is an experienced tattoo artist specializing in Neotraditional and Chicano styles. He brings unique artistry to each tattoo. His passion for tattooing is deeply connected to his cultural roots, blending modern and traditional tattoo styles to create pieces that tell a story.",
    portfolio: [
      "/path-to-image1.jpg",
      "/path-to-image2.jpg",
      "/path-to-image3.jpg"
    ],
    specialties: [
      "Neotraditional: A modern take on traditional tattooing with bold lines and vibrant colors.",
      "Chicano: Tattoos inspired by Mexican-American culture, with intricate shading and symbolism."
    ],
    booking: "Booking is available through email or Instagram DM. Please inquire about availability 3-4 weeks in advance.",
    socialMedia: {
      instagram: "https://www.instagram.com/jordanramirez_tattoos",
      facebook: "https://facebook.com/jordanramirez_tattoos"
    },
    contactInfo: {
      email: "jordan@tattooshop.com",
      phone: "123-456-7890"
    }
  },
  "andrea-montero": {
    name: "Andrea Montero",
    image: "andrea.webp", // Use your actual image path here
    style: "Línea fina / Puntillismo de arrastre",
    bio: "Andrea is an expert in fine line tattoos and the art of dotwork. She creates intricate and detailed designs, with an emphasis on precision and delicate lines. Andrea has been perfecting her craft for over 5 years, specializing in small, minimalistic tattoos and detailed portraits.",
    portfolio: [
      "/path-to-image4.jpg",
      "/path-to-image5.jpg",
      "/path-to-image6.jpg"
    ],
    specialties: [
      "Fine Line: Delicate, precise tattoos using thin lines for a minimalist effect.",
      "Dotwork: Tattoos created using a series of dots to build shading and texture."
    ],
    booking: "To book a session, please send an email with your design idea and preferred dates. She typically books out 2-3 weeks in advance.",
    socialMedia: {
      instagram: "https://www.instagram.com/andreamontero_tattoos",
      facebook: "https://facebook.com/andreamontero_tattoos"
    },
    contactInfo: {
      email: "andrea@tattooshop.com",
      phone: "987-654-3210"
    }
  }
};

const ArtistPage = () => {
  const { artistName } = useParams();  // Get the artist's name from the URL
  const artist = artistInfo[artistName];  // Find the artist's data based on the artistName parameter

  // If the artist is not found in the data, show a "not found" message
  if (!artist) {
    return <div>Artist not found</div>;
  }

  return (
    <div className="artist-page-artist">
      {/* Hero Section */}
      <section className="hero-section-artist">
  <img
    src={`${process.env.PUBLIC_URL}/${artist.image}`} 
    alt={artist.name}
  />
  <div className="hero-text-artist">
    <h1>{artist.name}</h1>
    <p>{artist.style}</p>
  </div>
</section>

      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>

      {/* Bio Section */}
      {/* <section className="bio-section-artist">
        <h2>About {artist.name}</h2>
        <p>{artist.bio}</p>
      </section> */}

        <section>
            <ArtistPageAboutMe artist={artist}/>
        </section>

      {/* Portfolio Section */}
      <section className="portfolio-section-artist">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery-artist">
          {artist.portfolio.map((image, index) => (
            <img key={index} src={image} alt={`Tattoo ${index + 1}`} className="portfolio-image-artist" />
          ))}
        </div>
      </section>

      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>

      {/* Styles Section */}
      <section className="styles-section-artist">
        <h2>Specialties</h2>
        <ul>
          {artist.specialties.map((specialty, index) => (
            <li key={index}>{specialty}</li>
          ))}
        </ul>
      </section>

      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>

      {/* Booking Section */}
      <section className="booking-section-artist">
        <h2>Booking & Availability</h2>
        <p>{artist.booking}</p>
      </section>

      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>

      {/* Social Media Section */}
      <section className="social-media-section-artist">
        <h2>Follow Me</h2>
        <div className="social-links-artist">
          <a href={artist.socialMedia.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href={artist.socialMedia.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
        </div>
      </section>

      <div className="section-divider-container">
        <img 
          src={`${process.env.PUBLIC_URL}/section-line-buen-vibra.svg`} 
          alt="Section Divider" 
          className="section-divider" 
        />
      </div>

      {/* Contact Information Section */}
      <section className="contact-section-artist">
        <h2>Contact</h2>
        <p>Email: <a href={`mailto:${artist.contactInfo.email}`}>{artist.contactInfo.email}</a></p>
        <p>Phone: <a href={`tel:${artist.contactInfo.phone}`}>{artist.contactInfo.phone}</a></p>
      </section>
    </div>
  );
};

export default ArtistPage;
