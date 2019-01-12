const getRepository = require('typeorm').getRepository

const updateProposal = async proposal => {

    let proposalRepository = getRepository("proposal")
    let result = await proposalRepository.update( proposal.id, { name: proposal.name, description: proposal.description })
            .then( async ()  => {
                let updatedProposal = await proposalRepository.findOne({ where: [ { id: proposal.id } ] })
                return updatedProposal
            })
            .catch( err => {
                return {
                    message: "There was an issue with updating the proposal",
                    err: err
                }
            })
    return result
}

module.exports = updateProposal