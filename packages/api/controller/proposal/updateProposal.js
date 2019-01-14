const getRepository = require('typeorm').getRepository

const updateProposal = async proposal => {

    console.log(proposal)

    let proposalRepository = getRepository("proposal")
    let result = await proposalRepository.findOneOrFail( { where: [{ id: proposal.id }] } )
            .then( async (foundProposal)  => {

                // Make Changes
                foundProposal.name = proposal.name
                foundProposal.description = proposal.description

                // Save Changes
                await proposalRepository.save(foundProposal)

                // Find Changed Entry and Return It
                return await proposalRepository.findOneOrFail( { where: [{ id: proposal.id }] } )
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