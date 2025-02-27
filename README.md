# Real-Time Chat Application

🚀🚀Welcome to the Real-Time Chat Application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to communicate in real-time, offering a seamless and interactive chatting experience.

# Features

```
Real-Time Messaging: Instant message delivery using WebSockets.
User Authentication: Secure user registration and login.
Responsive Design: Optimized for both desktop and mobile devices.
Message History: View past messages in the chat.
User Presence: See which users are online.
```

# Prerequisites

Before you begin, ensure you have the following installed:

```
Node.js (v14 or higher)
npm (v6 or higher)
MongoDB (v4.4 or higher)
```

# Project Structure

```
The project is divided into two main folders:
backend: Contains the server-side code (Node.js, Express.js, MongoDB).
frontend: Contains the client-side code (React.js).
```

# Backend

The backend is built using Node.js and Express.js, with MongoDB as the database. It handles user authentication, message storage, and real-time communication using WebSockets.

# Directory Structure

```
backend/
├── config/               # Configuration files (e.g., database connection)
├── controllers/           # Route controllers
├── models/                # MongoDB models
├── routes/                # API routes
├── middleware/            # Custom middleware (e.g., authentication)
├── utils/                 # Utility functions
├── server.js              # Entry point for the backend server
├── socket.js              # WebSocket setup
└── .env                   # Environment variables
```

# Setup

```
cd backend
npm install
```

# Create .env file

```
PORT=<your_app_port>
MONGO_URI=mongodb://localhost:27017/<your_database_name>
ACCESS_TOKEN_EXPIRATION_TIME= <ur_time>
REFRESH_TOKEN_EXPIRATION_TIME=<ur_time>
CLOUDINARY_CLOUD_NAME=<your_cloudinary_cloud_name>
CLOUDINARY_API_KEY=<your_cloudinary_api_key>
CLOUDINARY_API_SECRET=<your_cloudinary_secret_key>
JWT_ACCESS_SECRET=<put_yours_man>
JWT_REFRESH_SECRET=<put_yours_man>
```

# Run the server

```
npm run dev
```

# Contributing

Contributions are welcome! Please follow these steps:

```
Fork the repository.
Create a new branch (git checkout -b feature/YourFeatureName).
Commit your changes (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeatureName).
Open a pull request.
```

# Acknowledgments

```
Thanks to the open-source community for providing the tools and libraries that made this project possible.
Special thanks to the contributors who helped improve the application.
```

# Contact

```
For any inquiries or feedback, please reach out to [mlindaadolf@gmail.com].
```
