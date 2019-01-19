const { createConnection, EntitySchema } = require('typeorm');

// Entity Import
const PRODUCT = require('../entity/product');
const PROPOSAL = require('../entity/proposal');
const SECTION = require('../entity/section');
const USER = require('../entity/user');

const connection = async () => {
  const db = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'quote_tool_write_read',
    password: 'quote_tool',
    database: 'quoteTool',
    // logging: ['query', 'errors'],
    dropSchema: true,
    synchronize: true,
    entities: [
      new EntitySchema(PRODUCT),
      new EntitySchema(PROPOSAL),
      new EntitySchema(SECTION),
      new EntitySchema(USER),
    ],
  });

  return db;
};

module.exports = connection;
