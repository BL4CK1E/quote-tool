const getRepository = require('typeorm').getRepository

const createSection = async Section => {

    let sectionRepository = getRepository("Section");
    let result = await sectionRepository.save(Section)
            .then( savedProposal  => {
                return savedSection
            })
            .catch( err => {
                return {
                    message: "There was an issue saving the proposal",
                    err: err
                }
            });

    return result

}

module.exports = createSection