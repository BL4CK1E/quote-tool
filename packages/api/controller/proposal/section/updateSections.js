const getRepository = require('typeorm').getRepository

const updateProposal = async sectionArray => {

    let sectionRepository = getRepository("section")

    // Iterate Through Array
      // INSIDE LOOP: Find Section, Update it and Save it Again
      // INSIDE LOOP: Return Updated Sections
    // Iterate again and sort by section.order, return out of function

    let result = await sectionRepository.update( section.id, { name: section.name, order: section.order })
            .then( async ()  => {
                let sectionProposal = await sectionRepository.findOne({ where: [ { id: section.id } ] })
                return sectionProposal
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