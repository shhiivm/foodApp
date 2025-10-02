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

```
git clone https://github.com/shhiivm/foodApp.git
cd foodApp
```

Install dependencies:

`npm install`

Create a .env file in the root directory and add your environment variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the server:

`npm run dev`

API Endpoints
Base URL
http://localhost:5000/api/v1

```
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

```
