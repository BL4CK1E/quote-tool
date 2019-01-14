const getRepository = require('typeorm').getRepository

/*
    Finds Sections related to an a proposal.
    Requires a Proposal ID.
*/

const findAllSections = async (id) => {

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.find({ where: [{ proposal_id: id }] })
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