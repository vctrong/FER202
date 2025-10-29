# FER202 - React + Node.js Full-Stack Application

This is a full-stack web application built with React (frontend) and Node.js/Express (backend), designed for team collaboration.

## Project Structure

```
FER202/
├── backend/          # Node.js/Express API server
│   ├── server.js     # Main server file
│   ├── package.json  # Backend dependencies
│   └── .env.example  # Environment variables template
├── frontend/         # React application
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── App.js      # Main App component
│   │   └── index.js    # Entry point
│   └── package.json    # Frontend dependencies
└── README.md
```

## Technology Stack

### Frontend
- **React 18** - UI library
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file (copy from `.env.example`):
```bash
cp .env.example .env
```

4. Start the backend server:
```bash
npm start
```

The backend API will be running at `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the React development server:
```bash
npm start
```

The frontend will be running at `http://localhost:3000`

## API Endpoints

- `GET /api` - Welcome message
- `GET /api/health` - API health check
- `GET /api/users` - Get list of users (sample data)

## Features

- ✅ RESTful API backend
- ✅ React SPA frontend
- ✅ Client-side routing
- ✅ API integration with Axios
- ✅ CORS enabled
- ✅ Environment configuration
- ✅ Responsive design
- ✅ Modern UI with navigation

## Development

### Running Both Servers Simultaneously

For development, you'll need to run both the backend and frontend servers:

1. **Terminal 1** - Backend:
```bash
cd backend && npm start
```

2. **Terminal 2** - Frontend:
```bash
cd frontend && npm start
```

### Building for Production

Frontend:
```bash
cd frontend
npm run build
```

This creates an optimized production build in the `frontend/build` directory.

## Team Collaboration

This project structure supports team development:
- Separated frontend and backend concerns
- Clear API contract
- Independent development and testing
- Git-friendly structure
- Environment-based configuration

## Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

ISC
