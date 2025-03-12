import React from "react";
import "./ContactMe.css"; // Assuming you have external CSS, or you can use inline styles

export default function ContactMe() {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Let's Talk</h2>

      <form className="contact-form">
        <div className="form-row">
          <input
            type="text"
            placeholder="What is your name"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <input
            type="text"
            placeholder="Your WhatsApp"
            className="form-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="form-input"
          />
        </div>

        <div className="form-row">
          <textarea
            placeholder="Your Message"
            className="form-textarea"
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
