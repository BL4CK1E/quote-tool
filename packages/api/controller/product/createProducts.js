const getRepository = require('typeorm').getRepository

const createProduct = async product => {

    let productRepository = getRepository("product");
    let result = await productRepository.save(product)
            .then( savedProducts  => {
                return savedProducts
            })
            .catch( err => {
                console.log(err)
                return err
                throw new Error(`There was an issue saving sections.`)
            });

    return result

}

module.exports = createProduct