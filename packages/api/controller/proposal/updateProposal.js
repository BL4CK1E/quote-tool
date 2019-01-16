const getRepository = require('typeorm').getRepository;

const { PROPOSAL } = require('../../utilities/constants');

const updateProposal = async (proposal) => {
  const proposalRepository = getRepository(PROPOSAL);
  const result = await proposalRepository.findOneOrFail({ where: [{ id: proposal.id }] })
    .then(async (foundProposal) => {
      // Make Changes
      Object.keys(proposal).forEach((key) => {
        foundProposal[key] = proposal[key];
      });

      // Save Changes
      await proposalRepository.save(foundProposal);

      // Find Changed Entry and Return It
      return await proposalRepository.findOneOrFail({ where: [{ id: proposal.id }] });
    })
    .catch(() => {
      throw new Error(`There was an issue updating the proposal with an id of ${id}.`);
    });
  return result;
};

module.exports = updateProposal;
