import React from "react";
import "./ContactUs.css"; // Make sure to include the CSS for styling

const ContactUs = () => {
  return (
    <section className="contact-section" id="contact-section">
      <h2>Contact Us</h2>
      <p>We would love to hear from you! Please fill out our Google Form:</p>
      <a
        href="https://forms.gle/example" // Replace with your actual Google Form link
        target="_blank"
        rel="noopener noreferrer"
        className="contact-button"
      >
        Go to Contact Form
      </a>
    </section>
  );
};

export default ContactUs;
