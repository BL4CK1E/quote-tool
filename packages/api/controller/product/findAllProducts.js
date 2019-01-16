const { getRepository } = require('typeorm');
const { PRODUCT } = require('../../utilities/constants');

const findAllProducts = async (statusFlag) => {
  // 1 = Active = Default
  const status = statusFlag || 1;

  const productRepository = getRepository(PRODUCT);
  const result = await productRepository.find({ where: [{ status }] })
    .then(foundProducts => foundProducts)
    .catch(() => {
      throw new Error('There was an issue retrieving all products.');
    });

  return result;
};

module.exports = findAllProducts;
