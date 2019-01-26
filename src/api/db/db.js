const { createConnection, EntitySchema } = require("typeorm");

// Entity Import
const PRODUCT = require("../entity/product");
const PROPOSAL = require("../entity/proposal");
const SECTION = require("../entity/section");
const USER = require("../entity/user");

const connection = async () => {
  const db = await createConnection({
    type: "postgres",
    host: process.env.POSTGRES_CONNECTION,
    port: 5432,
    username: "postgres",
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    dropSchema: true,
    synchronize: true,
    entities: [
      new EntitySchema(PRODUCT),
      new EntitySchema(PROPOSAL),
      new EntitySchema(SECTION),
      new EntitySchema(USER)
    ]
  });
  return db;
};

module.exports = connection;
