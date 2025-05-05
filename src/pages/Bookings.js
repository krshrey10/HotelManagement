// src/pages/Bookings.js
import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './Bookings.css';

function Bookings() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      const bookingData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBookings(bookingData);
    };

    fetchBookings();
  }, []);

  return (
    <div className="bookings-container">
      <h2 className="bookings-title">All Bookings</h2>
      {bookings.length === 0 ? (
        <div className="no-bookings">No bookings found.</div>
      ) : (
        <div className="bookings-grid">
          {bookings.map((booking) => (
            <div key={booking.id} className="booking-card">
              <h3 className="room-name">{booking.roomName}</h3>
              <p><strong>Price:</strong> ₹{booking.roomPrice}</p>
              <p><strong>User:</strong> {booking.userName}</p>
              <p>
                <strong>Status:</strong>{' '}
                <span className={`status-badge ${booking.status}`}>{booking.status}</span>
              </p>
              <p className="timestamp">
                <small>Booked on: {new Date(booking.timestamp?.seconds * 1000).toLocaleString()}</small>
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Bookings;
