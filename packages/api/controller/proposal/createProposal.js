const getRepository = require('typeorm').getRepository

const createSections = require('./section/createSections')

const createProposal = async proposal => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.save(proposal)
            .then( async savedProposal  => {

                if (!!proposal.sections) {
                    savedProposal.sections  = await createSections(proposal.sections, proposal.id)
                }

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