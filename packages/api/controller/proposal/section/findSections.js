const { getRepository } = require('typeorm');
const { SECTION } = require('../../../utilities/constants');

const findAllSections = async (id) => {
  const sectionRepository = getRepository(SECTION);
  const options = { where: [{ proposal_id: id }], order: { order: 'ASC' } };
  const result = await sectionRepository.find(options)
    .then(foundSections => foundSections)
    .catch(() => {
      throw new Error(`There was an issue retrieving sections assoicated to the proposal with an id of ${id}.`);
    });

  return result;
};

module.exports = findAllSections;

/*
    Finds Sections related to an a proposal.
    Requires a Proposal ID.
*/
