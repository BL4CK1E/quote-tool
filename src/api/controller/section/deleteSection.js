const { getRepository } = require('typeorm');
const { SECTION } = require('../../utilities/constants');

const deleteSection = async (section) => {
  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.findOneOrFail({ where: [{ id: section.id }] })
    .then((foundSection) => {
      sectionRepository.delete(section.id);
      return foundSection;
    })
    .catch(() => {
      throw new Error(`There was an issue deleting the section with an id of ${section.id}.`);
    });

  return result;
};

module.exports = deleteSection;
