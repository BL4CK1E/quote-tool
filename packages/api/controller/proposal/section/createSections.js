const getRepository = require('typeorm').getRepository;

const { SECTION } = require('../../../utilities/constants');

const createSections = async (Section_Array, Proposal_Id) => {
  // Attaches Proposal_Id to each object within the Section Array
  const sectionsToSave = await Promise.all(Section_Array.map((section, index) => {
    section.order = index + 1;
    section.proposal_id = Proposal_Id;
    return section;
  }));

  const sectionRepository = getRepository(SECTION);
  const result = await sectionRepository.save(sectionsToSave)
    .then(savedSection => savedSection)
    .catch((err) => {
      throw new Error('There was an issue saving sections.');
    });

  return result;
};

module.exports = createSections;
