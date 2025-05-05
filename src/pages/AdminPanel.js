// src/pages/AdminPanel.js
import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function AdminPanel() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const bookingsSnapshot = await getDocs(collection(db, 'bookings'));
      const bookingList = bookingsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBookings(bookingList);
    };

    fetchBookings();
  }, []);

  const approveBooking = async (id) => {
    await updateDoc(doc(db, 'bookings', id), { status: 'approved' });
    alert("Booking Approved!");
  };

  return (
    <div>
      <h2>Admin Panel - Bookings</h2>
      {bookings.map(booking => (
        <div key={booking.id}>
          <p>Room ID: {booking.roomId} | Status: {booking.status}</p>
          <button onClick={() => approveBooking(booking.id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
