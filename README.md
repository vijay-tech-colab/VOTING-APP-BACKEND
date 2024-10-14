<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Voting App Backend</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 20px;
            background-color: #f9f9f9;
        }
        h1 {
            color: #2c3e50;
        }
        h2, h3 {
            color: #34495e;
        }
        pre {
            background-color: #f4f4f4;
            padding: 10px;
            border: 1px solid #ddd;
            overflow-x: auto;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }
        table, th, td {
            border: 1px solid #ddd;
        }
        th, td {
            padding: 10px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
        ul {
            list-style-type: none;
            padding: 0;
        }
    </style>
</head>
<body>

    <h1>Voting App Backend</h1>
    <p>Welcome to the <strong>Voting App backend</strong>! This application allows users to register, log in, and vote for candidates in an election. The backend is built using <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#getting-started">Getting Started</a></li>
        <li><a href="#technologies-used">Technologies Used</a></li>
        <li><a href="#api-endpoints">API Endpoints</a>
            <ul>
                <li><a href="#user-endpoints">User Endpoints</a></li>
                <li><a href="#candidate-endpoints">Candidate Endpoints</a></li>
            </ul>
        </li>
        <li><a href="#middleware">Middleware</a></li>
        <li><a href="#database-connection">Database Connection</a></li>
        <li><a href="#environment-variables">Environment Variables</a></li>
    </ul>

    <h2 id="features">Features</h2>
    <ul>
        <li>User registration and login</li>
        <li>Candidate management (create, update, delete)</li>
        <li>Voting system</li>
        <li>Vote counting</li>
        <li>Secure user authentication</li>
    </ul>

    <h2 id="getting-started">Getting Started</h2>

    <h3>Prerequisites</h3>
    <p>Before you begin, ensure you have met the following requirements:</p>
    <ul>
        <li><strong>Node.js</strong> (version >= 14)</li>
        <li><strong>MongoDB</strong> (installed and running)</li>
        <li><strong>NPM</strong> (Node Package Manager)</li>
    </ul>

    <h3>Installation</h3>
    <p>Follow these steps to set up the project:</p>
    <ol>
        <li>Clone the repository:
            <pre><code>git clone https://github.com/yourusername/voting-app-backend.git
cd voting-app-backend</code></pre>
        </li>
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

    <h2 id="technologies-used">Technologies Used</h2>
    <p>This project is built using the following technologies:</p>
    <ul>
        <li><strong>Node.js</strong></li>
        <li><strong>Express.js</strong></li>
        <li><strong>MongoDB</strong></li>
        <li><strong>dotenv</strong> (for environment variables)</li>
        <li><strong>body-parser</strong> (to parse incoming request bodies)</li>
        <li><strong>JWT</strong> (JSON Web Tokens) for authentication</li>
    </ul>

    <h2 id="api-endpoints">API Endpoints</h2>

    <h3 id="user-endpoints">User Endpoints</h3>
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

    <h3 id="candidate-endpoints">Candidate Endpoints</h3>
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

    <h2 id="middleware">Middleware</h2>
    <p><strong>auth</strong>: A middleware for user authentication to protect certain routes.</p>

    <h2 id="database-connection">Database Connection</h2>
    <p>The application connects to MongoDB using the provided connection string in the <code>.env</code> file. Ensure MongoDB is running before starting the server.</p>

    <h2 id="environment-variables">Environment Variables</h2>
    <p>The following environment variables are required:</p>
    <ul>
        <li><strong>PORT</strong>: The port on which the server will run (default is 5000).</li>
        <li><strong>MONGODB_URI</strong>: The MongoDB connection string.</li>
    </ul>

    <h2>Contributing</h2>
    <p>Contributions are welcome! If you would like to contribute, please create a pull request or open an issue to discuss changes.</p>

</body>
</html>


