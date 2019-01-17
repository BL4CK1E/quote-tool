const { getRepository } = require('typeorm');
const { SECTION } = require('../../../utilities/constants');

const createSections = async (sectionArray, proposalId) => {
  // Attaches Proposal_Id to each object within the Section Array
  const sectionsToSave = await Promise.all(sectionArray.map((section, index) => {
    const newSection = { ...section };
    newSection.order = index + 1;
    newSection.proposal_id = proposalId;
    return newSection;
  }));

  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.save(sectionsToSave)
    .then(savedSection => savedSection)
    .catch(() => {
      throw new Error('There was an issue saving sections.');
    });

  return result;
};

module.exports = createSections;
