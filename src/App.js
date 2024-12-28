import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import AboutUs from './components/AboutUs';
import MediaPage from './components/MediaPage/MediaPage';
import TeamPage from './components/TeamPage';
import './App.css';
import Footer from './components/Footer';
import ServicePage from './components/Service_Page/ServicePage';


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
                <WhyChooseUs />
                <TeamPage/>
                <AboutUs />
                
              </>
            }
          />
          <Route path="/media" element={<MediaPage />} />
          <Route path="/services" element={<ServicePage/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  );
};

export default App;