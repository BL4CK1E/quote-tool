const getRepository = require('typeorm').getRepository

const findSections = require('./section/findSections');

const findProposal = async (id, rel) => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.findOneOrFail({ where: [ { id } ] })
            .then( async foundProposal  => {


                if (rel !== null && rel) {
                    foundProposal.sections = await findSections(id);
                }

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