import React, { useState } from 'react';
import './ContactUs.css'; // You can add your own styles here

function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    region: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Add logic to send the data to an API or handle the submission
  };

  return (
    <div className="contact-us-container" id='contactus'>
      <h1>Connect with us.</h1>
      <div className="contact-us-container-form">
        {/* Name Section */}
        <div className="name-container">
          <div className="first-name-container">
            <h4 className="form-box-title">First Name</h4>
            <input
              type="text"
              name="firstName"
              placeholder='Enter First Name'
              value={formData.firstName}
              onChange={handleChange}
              className="form-box-title-input"
            />
          </div>
          <div className="last-name-container">
            <h4 className="form-box-title">Last Name</h4>
            <input
              type="text"
              name="lastName"
              placeholder='Enter Last Name'
              value={formData.lastName}
              onChange={handleChange}
              className="form-box-title-input"
            />
          </div>
        </div>

        {/* Email and Region Section */}
        <div className="email-region-container">
          <div className="email-container">
            <h4 className="form-box-title">Email</h4>
            <input
              type="email"
              name="email"
              placeholder='Enter Email'
              value={formData.email}
              onChange={handleChange}
              className="form-box-title-input"
            />
          </div>
          <div className="region-container">
            <h4 className="form-box-title">Region</h4>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              className="form-box-title-input"
            >
              <option value="">Select your region</option>
              <option value="North America">North America</option>
              <option value="Europe">Europe</option>
              <option value="Asia">Asia</option>
              <option value="Australia">Australia</option>
              <option value="Africa">Africa</option>
              <option value="South America">South America</option>
            </select>
          </div>
        </div>

        {/* Category Section */}
        <div className="category-container">
          <h4 className="form-box-title">Category</h4>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="form-box-title-input category-select"
          >
            <option value="">Choose the category that best describes your inquiry</option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Feedback</option>
            <option value="Partnership">Partnership</option>
          </select>
        </div>

        {/* Description Section */}
        <div className="description-container">
          <h4 className="form-box-title">How can we help your brand?*</h4>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-box-title-input description-container-input"
            rows="4"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="submit-container">
          <button type="submit" onClick={handleSubmit} className="submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
