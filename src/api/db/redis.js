/* eslint-disable no-console */
const redis = require("redis");
const { promisify } = require("util");

// Setup Env Variables
let REDIS_VARIABLES = "";
switch (process.env.NODE_ENV) {
  case "production":
    REDIS_VARIABLES = process.env.REDIS_CONNECTION;
    break;
  case "development":
    REDIS_VARIABLES;
    break;
  default:
    REDIS_VARIABLES;
}

// Connection Setup & Async Conversion
const REDIS_CONNECTION = `redis://${REDIS_VARIABLES}:6379`;
const RedisStore = redis.createClient(REDIS_CONNECTION);
const getAsync = promisify(RedisStore.get).bind(RedisStore);

module.exports = { RedisStore, getAsync };
