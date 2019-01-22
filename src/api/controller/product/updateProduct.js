const { getRepository } = require('typeorm');
const { PRODUCT } = require('../../utilities/constants');

const updateproduct = async (product) => {
  const productRepository = getRepository(PRODUCT);
  const result = await productRepository.findOneOrFail({ where: [{ id: product.id }] })
    .then(async (foundProduct) => {
      // Shallow Obj Copy
      const updatedProduct = { ...foundProduct };
      // Make Changes
      Object.keys(product).forEach((key) => {
        updatedProduct[key] = product[key];
      });
      // Save Changes
      await productRepository.save(foundProduct);
      // Find Changed Entry and Return It
      return productRepository.findOneOrFail({ where: [{ id: product.id }] });
    })
    .catch(() => {
      throw new Error(`There was an issue updating the product with an id of ${product.id}.`);
    });

  return result;
};

module.exports = updateproduct;
