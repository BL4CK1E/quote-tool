const getRepository = require('typeorm').getRepository;

const { SECTION } = require('../../../utilities/constants');

/*
    Finds a Section, requires an ID.
    Not specific to a proposal.
*/

const findSection = async (id) => {
  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.findOneOrFail({ where: [{ id }] })
    .then(foundSections => foundSections)
    .catch((err) => {
      throw new Error(`There was an issue retrieving the section with an id of ${id}.`);
    });

  return result;
};

module.exports = findSection;
