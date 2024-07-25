const dotenv = require('dotenv');
const path = require('path');
const { refreshTokenIfNeeded } = require('./auth.helper');

// Get the environment from command line argument or default to 'dev'
const env = process.env.NODE_ENV || 'dev';

// Load the appropriate .env file
const envPath = path.resolve(__dirname, `environments/.env.${env}`);
dotenv.config({ path: envPath });

// Export the refreshTokenIfNeeded function so Artillery can use it
module.exports = {
  refreshTokenIfNeeded
};