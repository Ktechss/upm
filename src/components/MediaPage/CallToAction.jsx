import React from 'react';
import PropTypes from 'prop-types';
import right_arrow from '../../assets/cta_right_arrow.png';
import './CallToAction.css';
import { useNavigate } from 'react-router-dom';

const CallToAction = ({ buttonText, link }) => {
  const navigate=useNavigate();
  return (
    <section className="cta-section">
      <button className="cta-button" onClick={()=>{
        navigate(link)
      }}>
        {buttonText}
        <img className='cta-arrow-image' src={right_arrow}/>
      </button>
      
    </section>
  );
};

CallToAction.propTypes = {
  buttonText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

CallToAction.defaultProps = {
  buttonText: 'Get Started',
  link: '#',
};

export default CallToAction;
