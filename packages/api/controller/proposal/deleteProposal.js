const getRepository = require('typeorm').getRepository

const deleteProposal = async proposal => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.findOneOrFail({ where: [ { id: proposal.id }, { name: proposal.name } ] })
            .then( foundProposal  => {

                proposalRepository.delete(foundProposal.id)

                return foundProposal
            })
            .catch( err => {
                return {
                    message: "There was an issue with deleting the proposal",
                    err: err
                }
            });

    return result

}

module.exports = deleteProposal