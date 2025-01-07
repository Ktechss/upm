import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import MediaPage from './components/MediaPage/MediaPage';
import TeamPage from './components/TeamPage';
import PageServices from './components/PageServices';
import WhyUS from './components/WhyUs';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import ServicePage from './components/Service_Page/ServicePage';
import Consulting_Page from './components/Consulting/Consulting_Page';
import MarketingPage from './components/Marketing/MarketingPage';
import AboutUsPage from './components/About_US/AboutUsPage';
import useIsMobile from './hooks/useIsMobile'; // Import the custom hook
import './App.css';

const App = () => {
  const isMobile = useIsMobile(); // Check if the user is on a mobile device

  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                <Services />
                <PageServices />
                <WhyUS />
                <TeamPage />
                <AboutUs />
              </>
            }
          />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/consulting" element={<Consulting_Page />} />
          <Route path="/about_us" element={<AboutUsPage />} />
        </Routes>
      </Router>
      {/* Dynamically render the footer */}
      {isMobile ? <MobileFooter /> : <Footer />}
    </>
  );
};

export default App;
