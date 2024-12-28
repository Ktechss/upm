import React from 'react';
import PropTypes from 'prop-types';
import right_arrow from '../../assets/cta_right_arrow.png';
import './CallToAction.css';

const CallToAction = ({ buttonText, link }) => {
  return (
    <section className="cta-section">
      <a href={link} className="cta-button">
        {buttonText}
        <img className='cta-arrow-image' src={right_arrow}/>
      </a>
      
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
