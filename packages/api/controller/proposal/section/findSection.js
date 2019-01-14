const getRepository = require('typeorm').getRepository

/*
    Finds a Section, requires an ID.
    Not specific to a proposal.
*/

const findSection = async (id) => {

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.findOneOrFail({ where: [ { id } ] })
            .then( foundSections  => {
                return foundSections
            })
            .catch( err => {
                return {
                    message: `There was an issue retrieving section ${id}`,
                    err: err
                }
            });

    return result

}

module.exports = findSection