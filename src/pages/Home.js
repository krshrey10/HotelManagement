// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to LuxeStay</h1>
          <p>Experience luxury and comfort with our exclusive rooms and top-tier service.</p>
          <Link to="/rooms" className="btn-primary">Explore Rooms</Link>
        </div>
      </section>

      <section className="home-nav">
        <h2>Quick Access</h2>
        <div className="nav-cards">
          <div className="nav-card">
            <img src="https://photos.mandarinoriental.com/is/image/MandarinOriental/dubai-suite-skyline-view-bedroom" alt="Rooms" />
            <h3>View Rooms</h3>
            <Link to="/rooms" className="btn-secondary">Go</Link>
          </div>
          <div className="nav-card">
            <img src="https://static.vecteezy.com/system/resources/previews/007/931/694/non_2x/about-us-button-about-us-text-template-for-website-about-us-icon-flat-style-vector.jpg" alt="Login" />
            <h3>About Us</h3>
            <Link to="/about">About Us</Link>

          </div>
          <div className="nav-card">
            <img src="https://travellerhints.com/wp-content/uploads/2017/04/Hotel-Booking.jpg" alt="Bookings" />
            <h3>View All Bookings</h3>
            <Link to="/bookings" className="btn-secondary">Go</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
