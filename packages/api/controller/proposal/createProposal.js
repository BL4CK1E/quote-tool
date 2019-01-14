const getRepository = require('typeorm').getRepository

const createSections = require('./section/createSections')

const createProposal = async proposal => {

    let proposalRepository = getRepository("proposal");
    let result = await proposalRepository.save(proposal)
            .then( async savedProposal  => {

                if (!!proposal.sections) {

                    let addProposalID = proposal.sections.map( (section, index) => { 
                        section.order = index+1
                        section.proposal_id = savedProposal.id 
                        return section
                    } )

                    let sectionsToSave = await Promise.all(addProposalID)
                        savedProposal.sections  = await createSections(sectionsToSave)
                        
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