const getConnection = require('typeorm').getConnection

const createSections = async SectionArray => {

    let result = await sectionRepository.createQueryBuilder()
      .insert()
      .into("Section")
      .values(SectionArray)
      .execute()  
      .then( savedSections => {
          return savedSections
      })
      .catch( err => {
          return {
              message: "There was an issue saving array of sections",
              err: err
          }
      });
    return result

}

module.exports = createSections