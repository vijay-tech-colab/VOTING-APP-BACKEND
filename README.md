# Voting App Backend

Welcome to the **Voting App backend**! This application allows users to register, log in, and vote for candidates in an election. The backend is built using **Node.js**, **Express**, and **MongoDB**.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
    - [User Endpoints](#user-endpoints)
    - [Candidate Endpoints](#candidate-endpoints)
- [Middleware](#middleware)
- [Database Connection](#database-connection)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)

## Features
- User registration and login
- Candidate management (create, update, delete)
- Voting system
- Vote counting
- Secure user authentication

## Getting Started

### Prerequisites
Before you begin, ensure you have met the following requirements:
- **Node.js** (version >= 14)
- **MongoDB** (installed and running)
- **NPM** (Node Package Manager)

### Installation
Follow these steps to set up the project:
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/voting-app-backend.git
    cd voting-app-backend
    ```
2. **Install dependencies**:
    ```bash
    npm install
    ```
3. **Create a `.env` file** in the root directory and add your environment variables:
    ```plaintext
    PORT=5000
    MONGODB_URI=mongodb://<username>:<password>@localhost:27017/votingapp
    ```
4. **Start the server**:
    ```bash
    npm start
    ```
5. The server will be running on `http://localhost:5000`.

## Technologies Used
This project is built using the following technologies:
- **Node.js**
- **Express.js**
- **MongoDB**
- **dotenv** (for environment variables)
- **body-parser** (to parse incoming request bodies)
- **JWT** (JSON Web Tokens) for authentication

## API Endpoints

### User Endpoints
| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| POST   | /user/signup       | Register a new user          |
| POST   | /user/login        | User login                   |
| GET    | /user/profile      | Get user profile             |
| POST   | /user/profile/password | Change user password      |

### Candidate Endpoints
| Method | Endpoint                     | Description                        |
|--------|------------------------------|------------------------------------|
| POST   | /candidate/save              | Create a new candidate             |
| DELETE | /candidate/delete/:candidate  | Delete a candidate                 |
| PUT    | /candidate/update/:candidate  | Update candidate details           |
| POST   | /candidate/vote/:candidate    | Vote for a candidate               |
| GET    | /candidate/getallcondidates   | Get all candidates                 |
| GET    | /candidate/votecound          | Get the vote count (Admin only)   |

## Middleware
**auth**: A middleware for user authentication to protect certain routes.

## Database Connection
The application connects to MongoDB using the provided connection string in the `.env` file. Ensure MongoDB is running before starting the server.

## Environment Variables
The following environment variables are required:
- **PORT**: The port on which the server will run (default is 5000).
- **MONGODB_URI**: The MongoDB connection string.

## Contributing
Contributions are welcome! If you would like to contribute, please create a pull request or open an issue to discuss changes.
