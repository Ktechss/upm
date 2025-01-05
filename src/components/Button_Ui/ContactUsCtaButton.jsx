import React from 'react';
import './ContactUsCtaButton.css';

function ContactUsCtaButton({ navigation_link }) {
    return (
        <div className="ContactUsCtaButton">
            <a href={navigation_link}>
                <button className="Contact-Us-Cta-Button">
                    Connect with us
                </button>
            </a>
        </div>
    );
}

export default ContactUsCtaButton;
