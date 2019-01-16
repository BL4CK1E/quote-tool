const getRepository = require('typeorm').getRepository;

const { SECTION } = require('../../../utilities/constants');

const createSection = async (Section) => {
  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.save(Section)
    .then((savedSection) => {
      console.log(savedSection);
      return savedSection;
    })
    .catch((err) => {
      throw new Error('There was an issue saving the section.');
    });
  return result;
};

module.exports = createSection;
