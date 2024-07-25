require('dotenv').config();
const axios = require('axios');

const TOKEN_REFRESH_INTERVAL = 1000 * 60 * 55; // 55 minutes (assuming 1-hour token lifetime)

async function refreshTokenIfNeeded(requestParams, context, ee, next) {
  // Initialize context.vars if not already done
  context.vars = context.vars || {};
  context.vars.tokenExpiryTime = context.vars.tokenExpiryTime || 0;
  context.vars.authToken = context.vars.authToken || '';

  const currentTime = Date.now();
  if (!context.vars.tokenExpiryTime || context.vars.tokenExpiryTime < currentTime) {
//    console.log('Fetching new token');
    try {
      const tokenData = await fetchToken(process.env.API_USERNAME, process.env.API_PASSWORD);
      context.vars.tokenExpiryTime = currentTime + TOKEN_REFRESH_INTERVAL;
      context.vars.authToken = tokenData.token;
//      console.log('  expiry time:', context.vars.tokenExpiryTime);
//      console.log('  new token:', context.vars.authToken);
    } catch (error) {
      console.error('Error fetching token:', error);
      return next(error); // Pass the error to Artillery
    }
  }
  return next();
}

async function fetchToken(username, password) {
  try {
    const response = await axios.post(`${process.env.API_URL}/login`, {
      email: username,
      password: password
    });
    return response.data;
  } catch (error) {
    console.error('Error during fetchToken:', error);
    throw error;
  }
}

module.exports = {
  refreshTokenIfNeeded
};
