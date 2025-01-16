import React, { useState, useEffect } from 'react';
import api from '../urls/api'; // Axios instance
import './ContactUs.css';

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    region: '',
    category: '',
    description: '',
  });

  const [regions, setRegions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false); // For popup visibility

  // Fetch regions and categories when the component loads
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [regionsResponse, categoriesResponse] = await Promise.all([
          api.get('/api/regions'), // Fetch regions
          api.get('/api/categories'), // Fetch categories
        ]);

        setRegions(regionsResponse.data);
        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching regions or categories:', error);
        setResponseMessage('Failed to load regions or categories.');
      }
    };

    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
  
    try {
      const response = await api.post('/api/contacts', formData);
  
      console.log('Response:', response); // Debugging response
  
      if (response.status >= 200 && response.status < 300) { // Handling all 2xx success codes
        setResponseMessage('Thank you for contacting us. We will get back to you soon!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          region: '',
          category: '',
          description: '',
        });
        setShowPopup(true); // Show the popup
      } else {
        setResponseMessage('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting the form:', error);
      setResponseMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setResponseMessage(''), 2000);
  };

  return (
    <div className="contact-us-container" id="contactus">
      <h1 className="contact-us-heading">Connect with us.</h1>
      <div className="contact-us-container-form">
        {/* Name Section */}
        <div className="contact-us-name-container">
          <div className="contact-us-first-name-container">
            <h4 className="contact-us-form-box-title">First Name</h4>
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="contact-us-form-box-title-input"
            />
          </div>
          <div className="contact-us-last-name-container">
            <h4 className="contact-us-form-box-title">Last Name</h4>
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="contact-us-form-box-title-input"
            />
          </div>
        </div>

        {/* Email and Region Section */}
        <div className="contact-us-email-region-container">
          <div className="contact-us-email-container">
            <h4 className="contact-us-form-box-title">Email</h4>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
              className="contact-us-form-box-title-input"
            />
          </div>
          <div className="contact-us-region-container">
            <h4 className="contact-us-form-box-title">Region</h4>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="contact-us-form-box-title-input"
            >
              <option value="">Select your region</option>
              {regions.map((region) => (
                <option key={region.id} value={region.name}>
                  {region.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Section */}
        <div className="contact-us-category-container">
          <h4 className="contact-us-form-box-title contact-us-form-box-title-h4 ">Category</h4>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="contact-us-form-box-title-input contact-us-category-select"
          >
            <option value="">Choose the category that best describes your inquiry</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Description Section */}
        <div className="contact-us-description-container">
          <h4 className="contact-us-form-box-title contact-us-form-box-title-h4">How can we help your brand?*</h4>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="contact-us-form-box-title-input contact-us-description-container-input"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="contact-us-submit-container">
          <button
            type="submit"
            onClick={handleSubmit}
            className="contact-us-submit-button"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </div>

        {/* Response Message */}
        {responseMessage && <p className="contact-us-response-message">{responseMessage}</p>}
      </div>

      {/* Popup */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>Form Submitted</h2>
            <p>Thank you for reaching out! We will contact you soon.</p>
            <button onClick={closePopup} className="popup-close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactUs;
