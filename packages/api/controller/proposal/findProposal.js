const getRepository = require('typeorm').getRepository

const findProposal = async (id) => {

    let proposalRepository = getRepository("proposal");
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