/* eslint-disable no-console */
const redis = require('redis');
const { promisify } = require('util');

const REDIS_CONNECTION = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
console.log(process.env.REDIS_URL);

const RedisStore = redis.createClient(REDIS_CONNECTION);
const getAsync = promisify(RedisStore.get).bind(RedisStore);

module.exports = { RedisStore, getAsync };
