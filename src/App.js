import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import MediaPage from './components/MediaPage/MediaPage';
import TeamPage from './components/TeamPage';
import PageServices from './components/PageServices';
import './App.css';
import Footer from './components/Footer';
import ServicePage from './components/Service_Page/ServicePage';
import Consulting_Page from './components/Consulting/Consulting_Page';
import MarketingPage from './components/Marketing/MarketingPage';


const App = () => {

  
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
                <PageServices/>
                <WhyChooseUs />
                <TeamPage/>
                <AboutUs />
                
              </>
            }
          />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/consulting" element={<Consulting_Page/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;