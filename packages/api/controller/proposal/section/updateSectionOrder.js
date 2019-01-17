const { getRepository } = require('typeorm');
const { SECTION } = require('../../../utilities/constants');
const { immutableMove, immutablePropUpdate } = require('../../../utilities/utilities');

const updateSectionOrder = async (proposalID, fromIndex, toIndex) => {
  const sectionRepository = getRepository(SECTION);
  const option = { where: [{ proposal_id: proposalID }], order: { order: 'ASC' } };
  const result = await sectionRepository.find(option)
    .then(async (foundArray) => {
      const movedArray = immutableMove(foundArray, fromIndex, toIndex);
      const orderedArray = immutablePropUpdate(movedArray, 'order');
      sectionRepository.save(orderedArray);
      return orderedArray;
    })
    .catch(err => ({
      message: 'There was an issue with updating the order of sections',
      err,
    }));
  return result;
};

module.exports = updateSectionOrder;

// Iterate Through Array
// INSIDE LOOP: Find Section, Update it and Save it Again
// INSIDE LOOP: Return Updated Sections
// Iterate again and sort by section.order, return out of function
