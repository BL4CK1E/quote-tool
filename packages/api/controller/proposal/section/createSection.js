const getRepository = require('typeorm').getRepository

const createSection = async Section => {

    console.log(Section)

    let sectionRepository = getRepository("section");
    let result = await sectionRepository.save(Section)
            .then( savedSection  => {
              console.log(savedSection)
                return savedSection
            })
            .catch( err => {
                return {
                    message: "There was an issue saving the section",
                    err: err
                }
            });
    return result

}

module.exports = createSection