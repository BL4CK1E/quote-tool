const getRepository = require('typeorm').getRepository

const findAllProposals = async () => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.find()
            .then( foundProposals  => {
                return foundProposals
            })
            .catch( err => {
                return {
                    message: "There was an issue retrieving all proposals",
                    err: err
                }
            });

    return result

}

module.exports = findAllProposals