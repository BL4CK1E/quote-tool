const getRepository = require('typeorm').getRepository

const createProposal = async proposal => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.save(proposal)
            .then( savedProposal  => {
                return savedProposal
            })
            .catch( err => {
                return {
                    message: "There was an issue saving the proposal",
                    err: err
                }
            });

    return result

}

module.exports = createProposal