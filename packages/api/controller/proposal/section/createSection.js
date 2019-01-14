const getRepository = require('typeorm').getRepository

const createSection = async Section => {

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.save(Section)
            .then( savedSection  => {
              console.log(savedSection)
                return savedSection
            })
            .catch( err => {
                throw new Error(`There was an issue saving the section.`)
            });
    return result

}

module.exports = createSection