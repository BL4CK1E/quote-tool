const getRepository = require('typeorm').getRepository

const { PRODUCT } = require('../../utilities/constants')

const findProduct = async (id, status_flag) => {

    // 1 = Active = Default
    let status = 1 || status_flag

    // Only returns 
    let productRepository = getRepository(PRODUCT);
    let result = await productRepository.findOneOrFail({ where: [ { id }, { status: status } ] })
            .then( async foundProduct  => {
                return foundProduct
            })
            .catch( () => {
                throw new Error(`There was an issue finding product with an id of ${id}.`)
            });
    return result
}

module.exports = findProduct