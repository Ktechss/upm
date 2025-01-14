import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import MediaPage from './components/MediaPage/MediaPage';
import PageServices from './components/PageServices';
import WhyUS from './components/WhyUs';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';
import Loader from './components/Loader/Loader'; // Import the Loader
import Consulting_Page from './components/Consulting/Consulting_Page';
import MarketingPage from './components/Marketing/MarketingPage';
import AboutUsPage from './components/About_US/AboutUsPage';
import useIsMobile from './hooks/useIsMobile'; // Import the custom hook
import './App.css';
import MobileHeader from './components/MobileHeader';
import Header from './components/Header';

import facebook_icon from './assets/facbook_Icon.png';
import twitter_icon from './assets/twitter.svg';
import instagram_icon from './assets/instagram.png';
import logo from './assets/upm_logo/UPM_W4.png';

import { navigationLinks, socialLinks } from './links'; // Import centralized links
import TeamSection from './components/Teams/TeamSection';
import UpmContact from './components/ContactUs/UpmContact';

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
];

const AppContent = () => {
  const location = useLocation();
  const isMobile = useIsMobile(); // Check if the user is on a mobile device

  // Determine the background color based on the path
  const rootStyle = {
    background: location.pathname === '/' ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ensure full height
  };

  return (
    <div style={rootStyle}>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isMobile ? (
                <MobileHeader logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
              ) : (
                <Header logo={logo} navigationLinks={navigationLinks} socialIcons={socialIcons} />
              )}
              <HomePage />
              <Services />
              <PageServices />
              <WhyUS />
              <TeamSection/>
              <AboutUs />
            </>
          }
        />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/consulting" element={<Consulting_Page />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/contact_us" element={<UpmContact/>}/>
      </Routes>
      {/* Dynamically render the footer */}
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  const handlePageLoad = () => {
    setLoading(false); // Stop showing the loader when the page is fully loaded
  };
  useEffect(() => {

    // if (document.readyState === 'complete') {
    //   // If the page is already loaded
    // } else {
    //   // Otherwise, wait for the "load" event
    //   window.addEventListener('load', handlePageLoad);
    // }
    
    // // Cleanup the event listener when the component unmounts
    // return () => {
    //   window.removeEventListener('load', handlePageLoad);
    // };
    handlePageLoad();
  }, []);

  return (
    <>
      {loading && <Loader />} {/* Show the loader while loading */}
      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default App;
