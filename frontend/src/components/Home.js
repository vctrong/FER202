import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [apiStatus, setApiStatus] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAPI = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/health');
        setApiStatus(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error connecting to API:', error);
        setApiStatus({ status: 'ERROR', message: 'Unable to connect to backend' });
        setLoading(false);
      }
    };

    checkAPI();
  }, []);

  return (
    <div className="home">
      <h1>Welcome to React + Node.js Application</h1>
      <p>This is a full-stack application built with React and Node.js/Express.</p>
      
      <div className="api-status">
        <h2>Backend API Status</h2>
        {loading ? (
          <p>Checking API connection...</p>
        ) : (
          <div>
            <p>Status: <strong>{apiStatus?.status}</strong></p>
            {apiStatus?.timestamp && (
              <p>Server Time: {new Date(apiStatus.timestamp).toLocaleString()}</p>
            )}
            {apiStatus?.message && <p className="error">{apiStatus.message}</p>}
          </div>
        )}
      </div>

      <div className="features">
        <h2>Features</h2>
        <ul>
          <li>React frontend with React Router</li>
          <li>Node.js/Express backend API</li>
          <li>RESTful API endpoints</li>
          <li>CORS enabled for cross-origin requests</li>
          <li>Environment variable configuration</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
