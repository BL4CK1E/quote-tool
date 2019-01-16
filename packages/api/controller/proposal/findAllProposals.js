const getRepository = require('typeorm').getRepository

const { PROPOSAL } = require('../../utilities/constants')

const findAllProposals = async () => {

    let proposalRepository = getRepository(PROPOSAL);
    let result = await proposalRepository.find()
            .then( foundProposals  => {
                return foundProposals
            })
            .catch( () => {
                throw new Error(`There was an issue retrieving all proposals.`)
            });

    return result

}

module.exports = findAllProposals