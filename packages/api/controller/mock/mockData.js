const createProposal = require('../proposal/createProposal')

const insertMockData = async () => {

  let section1 = {
    name: "Section_1",
    order: 1,
    proposal_id: 1
  }
  
  let section2 = {
    name: "Section_2",
    order: 2,
    proposal_id: 1
  }

  let section3 = {
    name: "Section_3",
    order: 3,
    proposal_id: 1
  }

  let section4 = {
    name: "Section_4",
    order: 4,
    proposal_id: 1
  }
  
  let proposal = {
    name: "Cloud Proposal",
    description: "Cloud Proposal for Lahey Constructions",
    sections: [
      section1, section2, section3, section4
    ] 
  }

  let result = await createProposal(proposal)

  console.log(result)

}

module.exports = insertMockData