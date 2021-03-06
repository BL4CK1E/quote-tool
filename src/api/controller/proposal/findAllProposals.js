const { getRepository } = require("typeorm");
const { PROPOSAL } = require("../../utilities/constants");

const findAllProposals = async () => {
  const proposalRepository = getRepository(PROPOSAL);
  const result = await proposalRepository
    .find({ order: { id: "DESC" } })
    .then(foundProposals => foundProposals)
    .catch(() => {
      throw new Error("There was an issue retrieving all proposals.");
    });

  return result;
};

module.exports = findAllProposals;
