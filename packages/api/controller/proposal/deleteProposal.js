const { getRepository } = require('typeorm');
const { PROPOSAL } = require('../../utilities/constants');

const deleteProposal = async (proposal) => {
  const proposalRepository = getRepository(PROPOSAL);
  const options = { where: [{ id: proposal.id }, { name: proposal.name }] };
  const result = await proposalRepository.findOneOrFail(options)
    .then((foundProposal) => {
      proposalRepository.delete(foundProposal.id);
      return foundProposal;
    })
    .catch(() => {
      throw new Error(`There was an issue deleting the proposal with an id of ${proposal.id}.`);
    });

  return result;
};

module.exports = deleteProposal;
