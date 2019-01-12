const getRepository = require('typeorm').getRepository

/*
    Finds a Section, requires an ID.
    Not specific to a proposal.
*/

const findAllSections = async (id) => {

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.findOneOrFail({ where: [{ id: id}] })
            .then( foundSections  => {
                return foundSections
            })
            .catch( err => {
                return {
                    message: "There was an issue retrieving all sections",
                    err: err
                }
            });

    return result

}

module.exports = findAllSections