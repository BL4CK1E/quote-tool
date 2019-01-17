const { getRepository } = require('typeorm');
const createSections = require('./section/createSections');

const { PROPOSAL } = require('../../utilities/constants');

const createProposal = async (proposal) => {
  const proposalRepository = getRepository(PROPOSAL);
  const result = await proposalRepository.save(proposal)
    .then(async (newProposal) => {
      const savedProposal = { ...newProposal };
      if (savedProposal.sections) {
        savedProposal.sections = await createSections(savedProposal.sections, savedProposal.id);
      }
      return savedProposal;
    })
    .catch(() => {
      throw new Error('There was an issue saving the proposal.');
    });

  return result;
};

module.exports = createProposal;
