const getRepository = require('typeorm').getRepository

const createSections = async (Section_Array, Proposal_Id) => {

    // Attaches Proposal_Id to each object within the Section Array
    let sectionsToSave = await Promise.all( Section_Array.map( (section, index) => { 
        section.order = index + 1
        section.proposal_id = Proposal_Id
        return section
    }))

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.save(sectionsToSave)
            .then( savedSection  => {
                return savedSection
            })
            .catch( err => {
                throw new Error(`There was an issue saving the proposal.`)
            });

    return result

}

module.exports = createSections