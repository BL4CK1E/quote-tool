const getRepository = require('typeorm').getRepository

const { PROPOSAL } = require('../../utilities/constants')

const findProposal = async (id) => {

    let proposalRepository = getRepository(PROPOSAL);
    let result = await proposalRepository.findOneOrFail({ where: [ { id } ] })
            .then( async foundProposal  => {
                return foundProposal
            })
            .catch( () => {
                throw new Error(`There was an issue finding proposal with an id of ${id}.`)
            });
    return result
}

module.exports = findProposal