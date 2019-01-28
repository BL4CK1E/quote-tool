const createProposal = require('../proposal/createProposal');
const createProducts = require('../product/createProducts');
const createUser = require('../user/createUser');

const insertMockData = async () => {
  const section1 = {
    name: 'Section_1',
    order: 1,
    proposal_id: 1
  };

  const section2 = {
    name: 'Section_2',
    order: 2,
    proposal_id: 1
  };

  const section3 = {
    name: 'Section_3',
    order: 3,
    proposal_id: 1
  };

  const section4 = {
    name: 'Section_4',
    order: 4,
    proposal_id: 1
  };

  const proposal = {
    name: 'Proposal 1',
    description:
      'The first proposal, this is just for mocking the database insertion',
    owner: 1,
    company: 1,
    sections: [section1, section2, section3, section4]
  };

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < 25; i++) {
    createProposal(proposal);
  }

  const product1 = {
    name: 'Monthly Management - Endpoint Device',
    description:
      'Overview: \n - Provides ongoing management of endpoint devices',
    sku: 'MSP-SV-ENDPOINT',
    mpn: 'MSP-SV-ENDPOINT',
    cost: 10.5,
    sell: 50.3,
    rrp: 500.0
  };

  const product2 = {
    name: 'Monthly Management - Physical Server (Simpl Server)',
    description:
      'Overview: \n - Provides ongoing management of simple physical server',
    sku: 'MSP-SV-SERVER-PHYSICAL-SIMPLE',
    mpn: 'MSP-SV-SERVER-PHYSICAL-SIMPLE',
    cost: 30.2,
    sell: 100.05,
    rrp: 100.2
  };

  const product3 = {
    name: 'Monthly Management - Physical Server (Complex Server)',
    description:
      'Overview: \n - Provides ongoing management of complex physical server',
    sku: 'MSP-SV-SERVER-PHYSICAL-COMPLEX',
    mpn: 'MSP-SV-SERVER-PHYSICAL-COMPLEX',
    cost: 50.0,
    sell: 150.0,
    rrp: 150.0
  };

  await createProducts([product1, product2, product3]);

  const newUser1 = {
    username: 'ctalke',
    password: 'thisisapassword',
    email: 'christopher.talke@gmail.com',
    firstName: 'Christopher',
    lastName: 'Talke'
  };

  await createUser(newUser1);
};

module.exports = insertMockData;
