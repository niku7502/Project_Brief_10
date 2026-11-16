const express = require('express');
const path = require('path');
const testRoutes = require('./routes/testRoutes');

const app = express();

// Middleware: read JSON and form data from incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: serve files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'RentEase API is running' });
});
app.use('/api', testRoutes);

// Middleware: handle unknown URLs
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;