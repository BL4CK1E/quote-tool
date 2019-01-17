const typeorm = require('typeorm');
const { createConnection, EntitySchema } = typeorm;

// Entity Import
const PRODUCT = require('../entity/product');
const PROPOSAL = require('../entity/proposal');
const SECTION = require('../entity/section');

const connection = async () => {
  const db = await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres' || 'quote_tool_write_read',
    password: 'postgres' || 'quote_tool',
    database: 'quoteTool',
    // logging: ["query", "errors"],
    dropSchema: true,
    synchronize: true,
    entities: [
      new EntitySchema(PRODUCT),
      new EntitySchema(PROPOSAL),
      new EntitySchema(SECTION),
    ],
  });

  return db;
};

module.exports = connection;
