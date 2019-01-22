/* eslint-disable no-console */
/* eslint-disable no-else-return */
/* eslint-disable no-unused-vars */
/* eslint-disable brace-style */

const { RedisStore } = require('../../db/redis');

const deauthoriseUser = async (token) => {
  RedisStore.del(token, (err) => {
    if (err) console.log('>>> Issue with deleting the token');
    console.log('>>> Token deleted');
  });
  return true;
};

module.exports = deauthoriseUser;
