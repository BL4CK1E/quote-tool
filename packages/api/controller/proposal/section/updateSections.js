const getRepository = require('typeorm').getRepository;

const { SECTION } = require('../../../utilities/constants');

const updateProposal = async (sectionArray) => {
  const sectionRepository = getRepository(SECTION);

  // Iterate Through Array
  // INSIDE LOOP: Find Section, Update it and Save it Again
  // INSIDE LOOP: Return Updated Sections
  // Iterate again and sort by section.order, return out of function

  const result = await sectionRepository.update(section.id, { name: section.name, order: section.order })
    .then(async () => {
      const sectionProposal = await sectionRepository.findOne({ where: [{ id: section.id }] });
      return sectionProposal;
    })
    .catch(err => ({
      message: 'There was an issue with updating the proposal',
      err,
    }));
  return result;
};

module.exports = updateProposal;
