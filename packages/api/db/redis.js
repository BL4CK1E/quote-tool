/* eslint-disable no-console */
const redis = require('redis');

// Create redis connection
const client = redis.createClient();

client.on('error', (err) => {
  console.log(`Error ${err}`);
});

module.exports = client;
