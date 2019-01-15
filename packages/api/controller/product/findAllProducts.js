const getRepository = require('typeorm').getRepository

const findAllProducts = async (status_flag) => {

    // 1 = Active = Default
    let status = status_flag || 1

    let productRepository = getRepository("product");
    let result = await productRepository.find({ where: [ { status } ] })
            .then( foundProducts  => {
                return foundProducts
            })
            .catch( () => {
                throw new Error(`There was an issue retrieving all products.`)
            });

    return result

}

module.exports = findAllProducts