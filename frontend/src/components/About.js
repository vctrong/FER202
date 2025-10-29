import React from 'react';

function About() {
  return (
    <div className="about">
      <h1>About This Project</h1>
      <p>This is a full-stack React and Node.js application template for teams.</p>
      
      <section>
        <h2>Technology Stack</h2>
        <div className="tech-stack">
          <div className="tech-section">
            <h3>Frontend</h3>
            <ul>
              <li>React 18</li>
              <li>React Router DOM</li>
              <li>Axios for API calls</li>
              <li>Modern CSS</li>
            </ul>
          </div>
          
          <div className="tech-section">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>CORS enabled</li>
              <li>Environment variables with dotenv</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2>Getting Started</h2>
        <div className="instructions">
          <h3>Backend Setup</h3>
          <ol>
            <li>Navigate to the backend folder: <code>cd backend</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Start the server: <code>npm start</code></li>
            <li>Server runs on: <code>http://localhost:5000</code></li>
          </ol>

          <h3>Frontend Setup</h3>
          <ol>
            <li>Navigate to the frontend folder: <code>cd frontend</code></li>
            <li>Install dependencies: <code>npm install</code></li>
            <li>Start the development server: <code>npm start</code></li>
            <li>App runs on: <code>http://localhost:3000</code></li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Team Collaboration</h2>
        <p>This project structure is designed for team development with:</p>
        <ul>
          <li>Separated frontend and backend concerns</li>
          <li>Easy to scale and maintain</li>
          <li>Clear API endpoints</li>
          <li>Environment configuration</li>
          <li>Git-friendly structure</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
