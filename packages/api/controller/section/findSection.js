const { getRepository } = require('typeorm');
const { SECTION } = require('../../utilities/constants');

const findSection = async (id) => {
  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.findOneOrFail({ where: [{ id }] })
    .then(foundSections => foundSections)
    .catch(() => {
      throw new Error(`There was an issue retrieving the section with an id of ${id}.`);
    });

  return result;
};

module.exports = findSection;

/*
    Finds a Section, requires an ID.
    Not specific to a proposal.
*/
