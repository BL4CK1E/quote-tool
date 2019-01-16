const { getRepository } = require('typeorm');
const { PRODUCT } = require('../../utilities/constants');

const findProduct = async (id, stateFlag) => {
  // 1 = Active = Default
  const status = 1 || stateFlag;

  // Only returns
  const productRepository = getRepository(PRODUCT);
  const result = await productRepository.findOneOrFail({ where: [{ id }, { status }] })
    .then(async foundProduct => foundProduct)
    .catch(() => {
      throw new Error(`There was an issue finding product with an id of ${id}.`);
    });
  return result;
};

module.exports = findProduct;
