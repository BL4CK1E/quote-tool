const { getRepository } = require('typeorm');
const { PRODUCT } = require('../../utilities/constants');

const createProduct = async (product) => {
  const productRepository = getRepository(PRODUCT);
  const result = await productRepository.save(product)
    .then(savedProducts => savedProducts)
    .catch(() => {
      throw new Error('There was an issue saving sections.');
    });

  return result;
};

module.exports = createProduct;
