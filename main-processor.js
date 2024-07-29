// Load environment variables
require('./helpers/load-env');

// Export the refreshTokenIfNeeded function
const { refreshTokenIfNeeded } = require('./helpers/auth.helper');

const { updateUsers } = require('./api/users.api');

module.exports = {
  refreshTokenIfNeeded,
  updateUsers,
};