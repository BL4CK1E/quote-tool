const { createConnection, EntitySchema } = require('typeorm');

// Entity Import
const PRODUCT = require('../entity/product');
const PROPOSAL = require('../entity/proposal');
const SECTION = require('../entity/section');
const USER = require('../entity/user');

// Setup Env Variables
let DB_VARIABLES = {
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'proposify'
};
switch (process.env.NODE_ENV) {
  case 'production':
    DB_VARIABLES = {
      host: process.env.POSTGRES_CONNECTION,
      username: 'postgres',
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB
    };
    break;
  case 'development':
    break;
  default:
}

// Connection Setup
const connection = async () => {
  const db = await createConnection({
    type: 'postgres',
    host: DB_VARIABLES.host,
    port: 5432,
    username: DB_VARIABLES.username,
    password: DB_VARIABLES.password,
    database: DB_VARIABLES.database,
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
