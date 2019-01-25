const { createConnection, EntitySchema } = require('typeorm');

// Entity Import
const PRODUCT = require('../entity/product');
const PROPOSAL = require('../entity/proposal');
const SECTION = require('../entity/section');
const USER = require('../entity/user');

console.log(process.env.POSTGRES_CONNECTION);

const connection = async () => {
  const db = await createConnection({
    type: 'postgres',
    host: process.env.POSTGRES_CONNECTION || 'localhost',
    port: 5432,
    username: process.env.POSTGRES_PASSWORD || 'postgres',
    password: process.env.POSTGRES_PASSWORD || 'postgres',
    database: process.env.POSTGRES_NAME || 'quoteTool',
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
