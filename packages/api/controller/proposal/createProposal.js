const getRepository = require('typeorm').getRepository;
const createSections = require('./section/createSections');

const { PROPOSAL } = require('../../utilities/constants');

const createProposal = async (proposal) => {
  const proposalRepository = getRepository(PROPOSAL);
  const result = await proposalRepository.save(proposal)
    .then(async (savedProposal) => {
      if (proposal.sections) {
        savedProposal.sections = await createSections(proposal.sections, proposal.id);
      }

      return savedProposal;
    })
    .catch(() => {
      throw new Error('There was an issue saving the proposal.');
    });

  return result;
};

module.exports = createProposal;
