const getRepository = require('typeorm').getRepository

const { PROPOSAL } = require('../../utilities/constants')

const deleteProposal = async proposal => {

    let proposalRepository = getRepository(PROPOSAL);
    let result = await proposalRepository.findOneOrFail({ where: [ { id: proposal.id }, { name: proposal.name } ] })
            .then( foundProposal  => {
                proposalRepository.delete(foundProposal.id)
                return foundProposal
            })
            .catch( err => {
                throw new Error(`There was an issue deleting the proposal with an id of ${id}.`)
            });

    return result

}

module.exports = deleteProposal