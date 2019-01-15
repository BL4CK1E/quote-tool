const getRepository = require('typeorm').getRepository

const deleteProposal = async proposal => {

    let proposalRepository = getRepository("proposal");
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