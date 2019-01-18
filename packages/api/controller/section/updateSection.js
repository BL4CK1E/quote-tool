const { getRepository } = require('typeorm');
const { SECTION } = require('../../utilities/constants');

const updateProposal = async (section) => {
  const sectionRepository = getRepository(SECTION);
  const options = { name: section.name, order: section.order };
  const result = await sectionRepository.update(section.id, options)
    .then(async () => {
      const sectionProposal = await sectionRepository.findOne({ where: [{ id: section.id }] });
      return sectionProposal;
    })
    .catch(() => {
      throw new Error('There was an issue updating the section.');
    });
  return result;
};

module.exports = updateProposal;
