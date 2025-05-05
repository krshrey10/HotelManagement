// src/pages/Payment.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './Payment.css'; // Import CSS file

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { roomId, roomName, roomPrice } = location.state || {};

  const [userName, setUserName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = async () => {
    if (!userName || !cardNumber || !expiry || !cvv) {
      alert('Please fill in all fields.');
      return;
    }

    await addDoc(collection(db, 'bookings'), {
      roomId,
      roomName,
      roomPrice,
      userName,
      status: 'pending',
      timestamp: new Date(),
    });

    alert('Payment successful and booking confirmed!');
    navigate('/');
  };

  return (
    <div className="payment-container">
      <div className="payment-card">
        <h2>Payment for: {roomName}</h2>
        <p><strong>Amount:</strong> ₹{roomPrice}</p>

        <div className="payment-form">
          <label>Full Name</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
          />

          <label>Card Number</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="1234 5678 9012 3456"
            maxLength="19"
          />

          <div className="payment-row">
            <div>
              <label>Expiry</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label>CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="123"
                maxLength="4"
              />
            </div>
          </div>

          <button onClick={handlePayment}>Pay Now</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
