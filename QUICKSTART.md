# Quick Start Guide

This guide will help you get started with the FER202 React + Node.js application.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)
- A code editor (VS Code recommended)

## Installation Steps

### Option 1: Install All Dependencies at Once

From the root directory, run:
```bash
npm run install-all
```

This will install dependencies for both backend and frontend.

### Option 2: Install Separately

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

## Running the Application

You need to run both servers simultaneously in different terminal windows.

### Terminal 1 - Backend Server

```bash
cd backend
npm start
```

The backend API will run on: http://localhost:5000

### Terminal 2 - Frontend Server

```bash
cd frontend
npm start
```

The React app will run on: http://localhost:3000 and automatically open in your browser.

## Available API Endpoints

- `GET http://localhost:5000/api` - Welcome message
- `GET http://localhost:5000/api/health` - Health check
- `GET http://localhost:5000/api/users` - Get users list

## Frontend Routes

- `/` - Home page (displays API status)
- `/users` - Users list page (fetches data from backend)
- `/about` - About page (project information)

## Testing the Integration

1. Start both servers as described above
2. Open http://localhost:3000 in your browser
3. Click on "Users" in the navigation
4. You should see a list of users fetched from the backend

## Common Issues

### Port Already in Use

If you get an error that port 5000 or 3000 is already in use:
- Find and stop the process using that port
- Or change the port in backend/.env (for backend) or frontend/package.json (for frontend)

### CORS Errors

The backend is already configured with CORS. If you still see CORS errors:
- Make sure the backend is running
- Check that you're accessing from http://localhost:3000

## Development Tips

1. **Hot Reload**: Both servers support hot reload. Changes will reflect automatically.
2. **Environment Variables**: Use `.env` file in backend for configuration
3. **API Testing**: Use tools like Postman or curl to test API endpoints
4. **React DevTools**: Install React Developer Tools browser extension for debugging

## Building for Production

**Frontend:**
```bash
cd frontend
npm run build
```

This creates an optimized production build in `frontend/build` directory.

## Next Steps

- Add more API endpoints in `backend/server.js`
- Create more React components in `frontend/src/components/`
- Add a database (MongoDB, PostgreSQL, etc.)
- Implement authentication
- Add state management (Redux, Context API)
- Write tests (Jest, React Testing Library)

Happy coding! 🚀
