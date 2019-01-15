const getRepository = require('typeorm').getRepository

const updateproduct = async product => {

    let productRepository = getRepository("product")
    let result = await productRepository.findOneOrFail( { where: [{ id: product.id }] } )
            .then( async (foundProduct)  => {

                // Make Changes
                Object.keys(product).forEach( key => {
                  foundProduct[key] = product[key]
                })

                // Save Changes
                await productRepository.save(foundProduct)

                // Find Changed Entry and Return It
                return await productRepository.findOneOrFail( { where: [{ id: product.id }] } )
            })
            .catch( () => {
                throw new Error(`There was an issue updating the product with an id of ${id}.`)
            })
    return result
}

module.exports = updateproduct