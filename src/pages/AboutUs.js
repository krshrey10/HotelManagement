// src/pages/AboutUs.js
import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Welcome to our hotel! Discover who we are and what we offer.</p>
      </div>

      <div className="about-content">
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our goal is to provide guests with an exceptional experience that combines comfort,
            hospitality, and innovation. We aim to deliver the best in class service for every guest, every time.
          </p>
        </section>

        <section className="about-section">
          <h2>Why Choose Us</h2>
          <ul>
            <li> Top-rated service and amenities</li>
            <li>Comfortable and modern rooms</li>
            <li>Hygiene and safety first</li>
            <li>Prime locations with great accessibility</li>
            <li>Friendly and professional staff</li>
          </ul>
        </section>

        <section className="about-section">
          <h2>Contact Information</h2>
          <p><strong>Email:</strong> support@hotelbooking.com</p>
          <p><strong>Phone:</strong> +91 123456789</p>
          <p><strong>Address:</strong> 123 Luxury Lane, Cityview, India</p>
        </section>
      </div>
    </div>
  );
}

export default AboutUs;
