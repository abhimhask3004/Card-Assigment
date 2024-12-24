import React, { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <img src={user.picture.large} alt="Profile" className="profile-image" />
        </div>
        <div className="profile-info">
          <p><strong>Name:</strong> {user.name.first} &nbsp; {user.name.last} </p>
          <p><strong>Gender:</strong> {user.gender}</p>
          <p><strong>Phone Number:</strong> {user.phone}</p>
      </div>
    </div>
  );
}

export default App;

