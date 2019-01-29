const { createConnection, EntitySchema } = require("typeorm");
const { DB_VARIABLES } = require("../config/config");

// Entity Import
const USER = require("../entity/user");

// Connection Setup
const connection = async () => {
  const db = await createConnection({
    type: "postgres",
    host: DB_VARIABLES.host,
    port: 5432,
    username: DB_VARIABLES.username,
    password: DB_VARIABLES.password,
    database: DB_VARIABLES.database,
    dropSchema: true,
    synchronize: true,
    entities: [new EntitySchema(USER)]
  });
  return db;
};

module.exports = connection;
