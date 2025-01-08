import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import MediaPage from './components/MediaPage/MediaPage';
import TeamPage from './components/TeamPage';
import PageServices from './components/PageServices';
import WhyUS from './components/WhyUs';
import Footer from './components/Footer';
import MobileFooter from './components/MobileFooter';

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

const navigationLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#teams' },
  { label: 'About Us', href: '/about_us' },
  { label: 'Contact Us', href: '#contactus' },
];
const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: '#' },
  { label: 'Twitter', icon: twitter_icon, href: '#' },
  { label: 'Instagram', icon: instagram_icon, href: '#' },
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
      {/* Dynamically render the footer */}
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
