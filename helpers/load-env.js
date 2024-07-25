const dotenv = require('dotenv');
const path = require('path');

// Get the environment from command line argument or default to 'dev'
const env = process.env.NODE_ENV || 'dev';

// Load the appropriate .env file
const envPath = path.resolve(__dirname, `../environments/.env.${env}`);
dotenv.config({ path: envPath });

// Print variables to verify they are loaded
//console.log('API_URL:', process.env.API_URL);
//console.log('API_USERNAME:', process.env.API_USERNAME);
//console.log('API_PASSWORD:', process.env.API_PASSWORD);
