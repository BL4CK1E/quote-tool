/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const { mergeTypes, mergeResolvers } = require('merge-graphql-schemas');
const path = require('path');
const fs = require('fs');
const { makeExecutableSchema } = require('graphql-tools');
const glob = require('glob');

const genSchema = () => {
  const pathToModules = path.join(__dirname, '../modules');
  const graphqlTypes = glob
    .sync(`${pathToModules}/**/*.graphql`)
    .map(x => fs.readFileSync(x, { encoding: 'utf8' }));

  const resolvers = glob
    .sync(`${pathToModules}/**/**.js`)
    .map(resolver => require(resolver));

  return makeExecutableSchema({
    typeDefs: mergeTypes(graphqlTypes),
    resolvers: mergeResolvers(resolvers),
  });
};

module.exports = genSchema;
