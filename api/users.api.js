const axios = require('axios');

async function updateUsers(context) {
  context.vars = context.vars || {};
  const users = context.vars.users;

  if (!Array.isArray(users)) {
    console.error('Invalid users data:', users);
    return;
  }

  try {
    const updatePromises = users.map(user => {
      const url = `${process.env.API_URL}/users/${user.id}`;
      const data = { ...user, active: false };
      const headers = { Authorization: `Bearer ${context.vars.authToken}` };
      return axios.post(url, data, { headers });
    });

    const results = await Promise.all(updatePromises);
//    console.log('Updated users:', results.map(res => res.data));
  } catch (error) {
    console.error('Error updating users:', error);
  }
}

module.exports = {
  updateUsers
};