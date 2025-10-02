Food App Backend

This is the backend service for the Food App, built using Node.js, Express, and MongoDB. It provides user authentication and will serve as the core API for the food delivery application.

Features

User registration and authentication

User model schema with the following fields:

username

email

password

address

phone

MongoDB integration with Mongoose

Environment variable management using dotenv

Logging with morgan

CORS enabled

Tech Stack

Node.js

Express.js

MongoDB with Mongoose

dotenv for configuration

Installation

Clone the repository:

git clone https://github.com/shhiivm/food-app-backend.git
cd food-app-backend

Install dependencies:

npm install

Create a .env file in the root directory and add your environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string

Start the server:

npm run dev

API Endpoints
Base URL
http://localhost:5000/api/v1

Auth Routes

1. Register a New User

POST /auth/register

Request Body:

{
"username": "alex_rivera",
"email": "alex.rivera@example.com",
"password": "S3cure!x9aQ#2025",
"address": "Apartment 4B, 128 Willow Lane, Springfield, IL 62704, USA",
"phone": "+1-217-555-0147"
}

Success Response:

{
"success": true,
"message": "User registered successfully",
"user": {
"id": "652b1348c29f1b2a7fbe9d1e",
"username": "alex_rivera",
"email": "alex.rivera@example.com",
"address": "Apartment 4B, 128 Willow Lane, Springfield, IL 62704, USA",
"phone": "+1-217-555-0147"
}
}

2. Login User

POST /auth/login

Request Body:

{
"email": "alex.rivera@example.com",
"password": "S3cure!x9aQ#2025"
}

Success Response:

{
"success": true,
"message": "Login successful",
"token": "jwt_token_here"
}

Project Structure

food-app-backend/
│-- config/
│ └── dbconfig.js
│-- models/
│ └── userModel.js
│-- routes/
│ └── authRoutes.js
│-- controllers/
│ └── authController.js
│-- index.js
│-- package.json
│-- .env
