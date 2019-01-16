const createProposal = require('../proposal/createProposal')
const createProducts = require('../product/createProducts')

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
    name: "Proposal 1",
    description: "The first proposal, this is just for mocking the database insertion",
    sections: [
      section1, section2, section3, section4
    ] 
  }

  await createProposal(proposal)

  let product1 = {
    name : "Monthly Management - Endpoint Device",
    description: "Overview: \n - Provides ongoing management of endpoint devices", 
    sku: "MSP-SV-ENDPOINT",
    mpn: "MSP-SV-ENDPOINT",
    cost: 10.50,
    sell: 50.30,
    rrp: 500.00,
  }

  let product2 = {
    name : "Monthly Management - Physical Server (Simpl Server)",
    description: "Overview: \n - Provides ongoing management of simple physical server", 
    sku: "MSP-SV-SERVER-PHYSICAL-SIMPLE",
    mpn: "MSP-SV-SERVER-PHYSICAL-SIMPLE",
    cost: 30.20,
    sell: 100.05,
    rrp: 100.20
  }

  let product3 = {
    name : "Monthly Management - Physical Server (Complex Server)",
    description: "Overview: \n - Provides ongoing management of complex physical server", 
    sku: "MSP-SV-SERVER-PHYSICAL-COMPLEX",
    mpn: "MSP-SV-SERVER-PHYSICAL-COMPLEX",
    cost: 50.00,
    sell: 150.00,
    rrp: 150.00
  }

  let product4 = {
    name : "Monthly Management - Physical Server (Hyper Visor Server)",
    sku: "MSP-SV-SERVER-PHYSICAL-HYPERVISOR",
    mpn: "MSP-SV-SERVER-PHYSICAL-HYPERVISOR",
    cost: 25.00,
    sell: 100.00,
    rrp: 100.00
  }

  await createProducts([product1, product2, product3])

  console.log("[mockData.js] mock data inserted!")

}

module.exports = insertMockData