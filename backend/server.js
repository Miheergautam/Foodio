const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

// Import routes
const mainRouter = require('./routes/index');

// Import DB connection
const connectDB = require('./config/db');

// Initialize environment variables
dotenv.config();

// Create Express app
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json()); // for parsing application/json

// Connect to MongoDB
connectDB();

// Define routes
app.use('/api', mainRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});