/* eslint-disable no-console */
const redis = require("redis");
const { promisify } = require("util");

const REDIS_CONNECTION = `redis://${process.env.REDIS_CONNECTION}:6379`;

const RedisStore = redis.createClient(REDIS_CONNECTION);
const getAsync = promisify(RedisStore.get).bind(RedisStore);

module.exports = { RedisStore, getAsync };
