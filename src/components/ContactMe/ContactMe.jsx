import React, { useState } from "react";
import "./ContactMe.css"; // Assuming you have external CSS, or you can use inline styles
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    // For WhatsApp, only allow numbers
    if (name === 'whatsapp') {
      if (value === '' || /^\d+$/.test(value)) {
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      }
      return;
    }

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate email
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setErrors(prev => ({
          ...prev,
          email: 'Please enter a valid email address'
        }));
      } else {
        setErrors(prev => ({
          ...prev,
          email: ''
        }));
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate email before submission
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors(prev => ({
        ...prev,
        email: 'Please enter a valid email address'
      }));
      return;
    }
    
    // Get current time
    const now = new Date();
    const timeString = now.toLocaleString();
    
    // EmailJS configuration
    const templateParams = {
      name: formData.name,
      email: formData.email,
      whatsapp: formData.whatsapp,
      message: formData.message,
      time: timeString
    };

    emailjs.send(
      'service_s2mu6wg',
      'template_tidd8rw',
      templateParams,
      'DWez_gDG5CXbeOI4p'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      setFormData({ name: '', whatsapp: '', email: '', message: '' });
      setErrors({ email: '' });
    })
    .catch((err) => {
      console.log('FAILED...', err);
      alert('Failed to send message. Please try again.');
    });
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let's Talk</h2>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label className="form-label">
            Name <span className="required-star">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="What is your name"
            className="form-input"
            required
          />
        </div>

        <div className="form-row">
          <div className="input-group">
            <label className="form-label">
              WhatsApp
            </label>
            <input
              type="text"
              name="whatsapp"
              value={formData.whatsapp}
              onChange={handleChange}
              placeholder="Your WhatsApp"
              className="form-input"
            />
          </div>
          <div className="input-group">
            <label className="form-label">
              Email <span className="required-star">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              required
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <label className="form-label">
            Message <span className="required-star">*</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="form-textarea"
            required
          ></textarea>
        </div>

        {/* <div className="form-row captcha-row">
          <span className="captcha-text">4 + 2 = </span>
          <input type="text" className="captcha-input" placeholder="?" />
          <span className="captcha-label"> * Captcha</span>
        </div> */}

        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>
    </section>
  );
}
