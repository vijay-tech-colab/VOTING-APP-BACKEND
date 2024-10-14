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

    <ol>
        <li><strong>Install dependencies</strong>:
            <pre><code>npm install</code></pre>
        </li>
        <li><strong>Create a <code>.env</code> file</strong> in the root directory and add your environment variables:
            <pre><code>PORT=5000
MONGODB_URI=mongodb://&lt;username&gt;:&lt;password&gt;@localhost:27017/votingapp</code></pre>
        </li>
        <li><strong>Start the server</strong>:
            <pre><code>npm start</code></pre>
        </li>
        <li>The server will be running on <code>http://localhost:5000</code>.</li>
    </ol>

    <h2>Technologies Used</h2>
    <p>This project is built using the following technologies:</p>
    <ul>
        <li><strong>Node.js</strong></li>
        <li><strong>Express.js</strong></li>
        <li><strong>MongoDB</strong></li>
        <li><strong>dotenv</strong> (for environment variables)</li>
        <li><strong>body-parser</strong> (to parse incoming request bodies)</li>
        <li><strong>JWT</strong> (JSON Web Tokens) for authentication</li>
    </ul>

    <h2>API Endpoints</h2>

    <h3>User Endpoints</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/user/signup</td>
                <td>Register a new user</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/user/login</td>
                <td>User login</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/user/profile</td>
                <td>Get user profile</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/user/profile/password</td>
                <td>Change user password</td>
            </tr>
        </tbody>
    </table>

    <h3>Candidate Endpoints</h3>
    <table>
        <thead>
            <tr>
                <th>Method</th>
                <th>Endpoint</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>POST</td>
                <td>/candidate/save</td>
                <td>Create a new candidate</td>
            </tr>
            <tr>
                <td>DELETE</td>
                <td>/candidate/delete/:candidate</td>
                <td>Delete a candidate</td>
            </tr>
            <tr>
                <td>PUT</td>
                <td>/candidate/update/:candidate</td>
                <td>Update candidate details</td>
            </tr>
            <tr>
                <td>POST</td>
                <td>/candidate/vote/:candidate</td>
                <td>Vote for a candidate</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/candidate/getallcondidates</td>
                <td>Get all candidates</td>
            </tr>
            <tr>
                <td>GET</td>
                <td>/candidate/votecound</td>
                <td>Get the vote count (Admin only)</td>
            </tr>
        </tbody>
    </table>

    <h2>Middleware</h2>
    <p><strong>auth</strong>: A middleware for user authentication to protect certain routes.</p>

    <h2>Database Connection</h2>
    <p>The application connects to MongoDB using the provided connection string in the <code>.env</code> file. Ensure MongoDB is running before starting the server.</p>

    <h2>Environment Variables</h2>
    <p>The following environment variables are required:</p>
    <ul>
        <li><strong>PORT</strong>: The port on which the server will run (default is 5000).</li>
        <li><strong>MONGODB_URI</strong>: The MongoDB connection string.</li>
    </ul>

    <h2>Contributing</h2>
    <p>Contributions are welcome! If you would like to contribute, please create a pull request or open an issue to discuss changes.</p>

