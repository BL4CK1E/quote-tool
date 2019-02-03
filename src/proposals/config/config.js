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

module.exports = { DB_VARIABLES };
