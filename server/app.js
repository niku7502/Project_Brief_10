const express = require('express');
const cors = require('cors');
const path = require('path');
const requestLogger = require('./middleware/requestLogger');
const testRoutes = require('./routes/testRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();

// Middleware: allow requests from the React app
app.use(cors());

// Middleware: read JSON and form data from incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware: log every request (Sprint 12)
app.use(requestLogger);

// Middleware: serve files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'RentEase API is running' });
});
app.use('/api', testRoutes);
app.use('/api/vehicles', vehicleRoutes);

// Middleware: handle unknown URLs (keep this last)
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

module.exports = app;