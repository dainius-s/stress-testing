// Load environment variables
require('./helpers/load-env');

// Export the refreshTokenIfNeeded function
const { refreshTokenIfNeeded } = require('./helpers/auth.helper');

module.exports = {
  refreshTokenIfNeeded,
};