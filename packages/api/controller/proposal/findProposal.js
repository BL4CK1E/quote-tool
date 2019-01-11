const getRepository = require('typeorm').getRepository

const findProposal = async id => {

    let proposalRepository = getRepository("Proposal");
    let result = await proposalRepository.findOneOrFail({ where: [ { id } ] }, { relations: ["sections"] })
            .then( foundProposal  => {
                return foundProposal
            })
            .catch( err => {
                return {
                    message: "There was an issue finding the proposal",
                    err: err
                }
            });

    return result

}

module.exports = findProposal