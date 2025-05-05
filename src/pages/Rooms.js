import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './Rooms.css';  // Import CSS file

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filteredRooms, setFilteredRooms] = useState([]);

  const [maxPrice, setMaxPrice] = useState('');
  const [roomType, setRoomType] = useState('');
  const [capacity, setCapacity] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      const querySnapshot = await getDocs(collection(db, 'rooms'));
      const roomData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setRooms(roomData);
      setFilteredRooms(roomData); // Initially show all rooms
    };

    fetchRooms();
  }, []);

  useEffect(() => {
    let filtered = rooms;

    if (maxPrice) {
      filtered = filtered.filter(room => Number(room.price) <= Number(maxPrice));
    }

    if (roomType) {
      filtered = filtered.filter(room => room.type === roomType);
    }

    if (capacity) {
      filtered = filtered.filter(room => Number(room.capacity) === Number(capacity));
    }

    setFilteredRooms(filtered);
  }, [maxPrice, roomType, capacity, rooms]);

  const handleBooking = (room) => {
    navigate('/payment', {
      state: {
        roomId: room.id,
        roomName: room.name,
        roomPrice: room.price
      }
    });
  };

  return (
    <div className="rooms-container">
      <h2 className="page-title">Available Rooms</h2>

      <div className="filters">
        <label className="filter-label">
          Max Price: 
          <input
            className="filter-input"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="e.g. 1500"
          />
        </label>

        <label className="filter-label">
          Room Type: 
          <select
            className="filter-input"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="">All</option>
            <option value="AC">AC</option>
            <option value="Non-AC">Non-AC</option>
          </select>
        </label>

        <label className="filter-label">
          Capacity: 
          <select
            className="filter-input"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">1 Guest</option>
            <option value="2">2 Guests</option>
            <option value="3">3 Guests</option>
            <option value="4">4 Guests</option>
          </select>
        </label>
      </div>

      <div className="rooms-list">
        {filteredRooms.length === 0 ? (
          <p>No rooms match the selected filters.</p>
        ) : (
          filteredRooms.map((room) => (
            <div key={room.id} className="room-card">
              <h3>{room.name}</h3>
              <p className="room-price">₹{room.price}</p>
              <p className="room-type">Type: {room.type}</p>
              <p className="room-capacity">Capacity: {room.capacity} guest(s)</p>
              {room.imageUrl && (
                <img
                  className="room-image"
                  src={room.imageUrl}
                  alt={room.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://via.placeholder.com/200?text=Image+Not+Found';
                  }}
                />
              )}
              <button className="book-button" onClick={() => handleBooking(room)}>Book</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Rooms;
