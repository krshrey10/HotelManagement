import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import AdminPanel from './pages/AdminPanel';

import Payment from './pages/Payment';
import Bookings from './pages/Bookings'; // Ensure this import exists
import AboutUs from './pages/AboutUs'; // Update this import
import 'bootstrap/dist/css/bootstrap.min.css';








import './App.css';  // Import the global CSS for header

function App() {
  return (
    <Router>
      <div>
        <header className="app-header">
          <div className="logo">
            <h1>Hotel Booking</h1>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/rooms">Rooms</a></li>
              <li><a href="/admin">Admin</a></li>
              <li><a href="/login">Login</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/payment" element={<Payment />} />
          <Route path="/bookings" element={<Bookings />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
