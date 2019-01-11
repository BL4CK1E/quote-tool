const createProposal = require('../proposal/createProposal')

const insertMockData = async () => {

  let section1 = {
    name: "Cover Letter",
    order: 1
  }
  
  let section2 = {
    name: "C3 Cloud",
    order: 2
  }
  
  let proposal = {
    name: "Cloud Proposal",
    description: "Cloud Proposal for Lahey Constructions",
    sections: [
      section1, section2
    ] 
  }

  let result = await createProposal(proposal)

  console.log(result)

}

module.exports = insertMockData