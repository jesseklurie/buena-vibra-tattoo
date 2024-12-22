import logo from './logo.svg';
import './App.css';
import HeroSection from './HeroSection';
import Welcome from './Welcome';
import Services from './Services';
import ArtistsSection from './ArtistsSection';
import AppointmentSection from './AppointmentSection';
import ContactSection from './ContactSection';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
     <HeroSection/>
     <Welcome/>
     <Services/>
     <ArtistsSection/>
     <AppointmentSection/>     
     <ContactSection/>
     <Footer/>
    
    </div>
  );
}

export default App;


