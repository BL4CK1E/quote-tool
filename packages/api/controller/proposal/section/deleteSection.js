const getRepository = require('typeorm').getRepository

const deleteSection = async section => {

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.findOneOrFail({ where: [ { id: section.id } ] })
            .then( foundSection  => {
                sectionRepository.delete(section.id)
                return foundSection
            })
            .catch( err => {
                return {
                    message: "There was an issue with deleting the section",
                    err: err
                }
            });

    return result

}

module.exports = deleteSection