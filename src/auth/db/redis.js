/* eslint-disable no-console */
const redis = require("redis");
const { REDIS_VARIABLES } = require("../config/config");
const { promisify } = require("util");

// Connection Setup & Async Conversion
const REDIS_CONNECTION = `redis://${REDIS_VARIABLES}:6379`;
const RedisStore = redis.createClient(REDIS_CONNECTION);
const getAsync = promisify(RedisStore.get).bind(RedisStore);

module.exports = { RedisStore, getAsync };
