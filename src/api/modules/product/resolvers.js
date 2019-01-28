/* eslint-disable no-unused-vars */

const findAllProducts = require('../../controller/product/findAllProducts');
const findProduct = require('../../controller/product/findProduct');
const createProducts = require('../../controller/product/createProducts');
const updateProduct = require('../../controller/product/updateProduct');

const resolvers = {

  Query: {

    // Gets Products
    Products: async (_, { status }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findAllProducts(status);
      return dbresponse;
    },

    // Gets Product
    Product: async (_, { id, status }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await findProduct(id, status);
      return dbresponse;
    },
  },

  Mutation: {
    // Add Product or Multiple Products
    addProducts: async (_, { products }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await createProducts(products);
      return dbresponse;
    },

    // Update Product
    updateProduct: async (_, { product }, { user }) => {
      if (user === null) throw new Error('Not Authorised!');
      const dbresponse = await updateProduct(product);
      return (dbresponse);
    },
  },

};

module.exports = resolvers;
