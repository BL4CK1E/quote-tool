/* eslint-disable no-console */
const redis = require('redis');
const { promisify } = require('util');

const RedisStore = redis.createClient();
const getAsync = promisify(RedisStore.get).bind(RedisStore);

module.exports = { RedisStore, getAsync };
