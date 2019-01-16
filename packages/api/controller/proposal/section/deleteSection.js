const getRepository = require('typeorm').getRepository

const { SECTION } = require('../../../utilities/constants')

const deleteSection = async section => {

    let sectionRepository = getRepository(SECTION);
    let result = await sectionRepository.findOneOrFail({ where: [ { id: section.id } ] })
            .then( foundSection  => {
                sectionRepository.delete(section.id)
                return foundSection
            })
            .catch( err => {
                throw new Error(`There was an issue deleting the section with an id of ${id}.`)
            });

    return result

}

module.exports = deleteSection