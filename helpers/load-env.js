const dotenv = require('dotenv');
const path = require('path');

// Load .env file
dotenv.config({ path: path.resolve(__dirname, '.env') });

// Print variables to verify they are loaded
console.log('API_URL:', process.env.API_URL);
console.log('API_USERNAME:', process.env.API_USERNAME);
console.log('API_PASSWORD:', process.env.API_PASSWORD);
