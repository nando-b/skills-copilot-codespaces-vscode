// Create web server
// This web server will listen to incoming requests and respond to them with the comments data

// Import the express library
const express = require('express');

// Create a new express application
const app = express();

// Import the comments data
const comments = require('./data/comments');

// Import the posts data
const posts = require('./data/posts');

// Import the users data
const users = require('./data/users');

// Use the express.static middleware to serve static files
app.use(express.static('public'));

// Create a route for the comments data
app.get('/comments', (req, res) => {
  res.json(comments);
});

// Create a route for the posts data
app.get('/posts', (req, res) => {
  res.json(posts);
});

// Create a route for the users data
app.get('/users', (req, res) => {
  res.json(users);
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});