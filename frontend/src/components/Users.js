import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Users.css';

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Unable to fetch users from the backend');
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="users"><p>Loading users...</p></div>;
  }

  if (error) {
    return <div className="users"><p className="error">{error}</p></div>;
  }

  return (
    <div className="users">
      <h1>Users List</h1>
      <p>This data is fetched from the Node.js backend API</p>
      
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <h3>{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p className="user-id">ID: {user.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
