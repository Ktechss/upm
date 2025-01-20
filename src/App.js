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
import Loader from './components/Loader/Loader';
import Consulting_Page from './components/Consulting/Consulting_Page';
import MarketingPage from './components/Marketing/MarketingPage';
import AboutUsPage from './components/About_US/AboutUsPage';
import useIsMobile from './hooks/useIsMobile';
import './App.css';
import MobileHeader from './components/MobileHeader';
import Header from './components/Header';

import facebook_icon from './assets/facbook_Icon.png';
import twitter_icon from './assets/twitter.svg';
import instagram_icon from './assets/instagram.png';
import logo from './assets/upm_logo/UPM_W4.png';

import { navigationLinks, socialLinks } from './links';
import TeamSection from './components/Teams/TeamSection';
import UpmContact from './components/ContactUs/UpmContact';

const socialIcons = [
  { label: 'Facebook', icon: facebook_icon, href: socialLinks.Facebook },
  { label: 'Twitter', icon: twitter_icon, href: socialLinks.Twitter },
  { label: 'Instagram', icon: instagram_icon, href: socialLinks.Instagram },
];

const AppContent = () => {
  const location = useLocation();
  const isMobile = useIsMobile();

  const rootStyle = {
    background: location.pathname === '/' ? 'black' : 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
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
              <TeamSection />
              <AboutUs />
            </>
          }
        />
        <Route path="/media" element={<MediaPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/consulting" element={<Consulting_Page />} />
        <Route path="/about_us" element={<AboutUsPage />} />
        <Route path="/contact_us" element={<UpmContact />} />
      </Routes>
      {isMobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Router>
        <AppContent />
      </Router>
    </>
  );
};

export default App;
