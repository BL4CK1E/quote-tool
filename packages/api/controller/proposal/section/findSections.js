const getRepository = require('typeorm').getRepository

const { SECTION } = require('../../../utilities/constants')

/*
    Finds Sections related to an a proposal.
    Requires a Proposal ID.
*/

const findAllSections = async (id) => {

    let sectionRepository = getRepository(SECTION);
    let result = await sectionRepository.find({ where: [{ proposal_id: id }] })
            .then( foundSections  => {
                return foundSections
            })
            .catch( err => {
                throw new Error(`There was an issue retrieving sections assoicated to the proposal with an id of ${id}.`)
            });

    return result

}

module.exports = findAllSections