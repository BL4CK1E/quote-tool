const { getRepository } = require('typeorm');
const { PROPOSAL } = require('../../utilities/constants');

const updateProposal = async (proposal) => {
  const proposalRepository = getRepository(PROPOSAL);
  const result = await proposalRepository.findOneOrFail({ where: [{ id: proposal.id }] })
    .then(async (foundProposal) => {
      // Shallow Obj Copy
      const updatedProposal = { ...foundProposal };
      // Make Changes
      Object.keys(proposal).forEach((key) => {
        updatedProposal[key] = proposal[key];
      });

      // Save Changes
      await proposalRepository.save(updatedProposal);

      // Find Changed Entry and Return It
      return proposalRepository.findOneOrFail({ where: [{ id: proposal.id }] });
    })
    .catch(() => {
      throw new Error(`There was an issue updating the proposal with an id of ${proposal.id}.`);
    });
  return result;
};

module.exports = updateProposal;
