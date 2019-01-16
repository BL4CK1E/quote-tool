const getRepository = require('typeorm').getRepository

const { PRODUCT } = require('../../utilities/constants')

const createProduct = async product => {

    let productRepository = getRepository(PRODUCT);
    let result = await productRepository.save(product)
            .then( savedProducts  => {
                return savedProducts
            })
            .catch( () => {
                throw new Error(`There was an issue saving sections.`)
            });

    return result

}

module.exports = createProduct