const getRepository = require('typeorm').getRepository

const updateProposal = async section => {

    let sectionRepository = getRepository("section")
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