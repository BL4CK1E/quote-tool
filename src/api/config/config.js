// Setup Redis Env Variables

// Default Settings (Development)
const DB_VARIABLES = {
  host: "localhost",
  username: "postgres",
  password: "postgres",
  database: "proposify"
};

switch (process.env.NODE_ENV) {
  case "production":
    DB_VARIABLES = {
      host: process.env.POSTGRES_CONNECTION,
      username: "postgres",
      password: process.env.POSTGRES_PASSWORD
    };
    break;
  default:
}

// Setup Redis Env Variables

// Default Settings (Development)
let REDIS_VARIABLES = "";

switch (process.env.NODE_ENV) {
  case "production":
    REDIS_VARIABLES = process.env.REDIS_CONNECTION;
    break;
  default:
}

// Microservices APIs

// Default Settings (Development)
const MS_VARIABLES = {
  PROPOSIFY_MS_AUTH: "http://localhost:3001"
};

switch (process.env.NODE_ENV) {
  case "production":
    MS_VARIABLES = {
      PROPOSIFY_MS_AUTH: process.env.PROPOSIFY__MS_AUTH_CONNECTION
    };
    break;
  default:
}

module.exports = { DB_VARIABLES, REDIS_VARIABLES, MS_VARIABLES };
