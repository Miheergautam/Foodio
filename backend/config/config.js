require('dotenv').config();

module.exports = {
  jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
  dbURI: process.env.DB_URI || 'mongodb://localhost:27017/foodio',
  port: process.env.PORT || 3000,
};