import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Profile = () => {
  const [userData, setUser Data] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser Data = async () => {
      try {
        const response = await axios.get('/api/user/profile'); // Adjust the endpoint as needed
        setUser Data(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser Data();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching user data: {error.message}</div>;
  }

  return (
    <div className="profile-container">
      <h1>User Profile</h1>
      {userData ? (
        <div className="profile-details">
          <img src={userData.profilePicture} alt="Profile" />
          <h2>{userData.name}</h2>
          <p>Email: {userData.email}</p>
          <p>Username: {userData.username}</p>
          <p>Bio: {userData.bio}</p>
          {/* Add more fields as necessary */}
        </div>
      ) : (
        <div>No user data available.</div>
      )}
    </div>
  );
};

export default Profile;