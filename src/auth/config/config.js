// Setup Redis Env Variables
let DB_VARIABLES = {
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "proposify_ms_auth"
};
switch (process.env.NODE_ENV) {
  case "production":
    DB_VARIABLES = {
      host: process.env.POSTGRES_CONNECTION,
      username: "postgres",
      password: process.env.POSTGRES_PASSWORD
    };
    break;
  case "development":
    break;
  default:
}

// Setup Redis Env Variables
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

module.exports = { DB_VARIABLES, REDIS_VARIABLES };
