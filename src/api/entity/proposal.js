const { PROPOSAL } = require('../utilities/constants');

module.exports = {
  name: PROPOSAL,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    name: {
      type: 'varchar',
      length: 60
    },
    description: {
      type: 'varchar',
      default: '',
      length: 150
    },
    value: {
      type: 'int',
      default: 0.0
    },
    company: {
      type: 'int',
      default: 1
    },
    owner: {
      type: 'int',
      default: 1
    },
    status: {
      type: 'int',
      default: 1 // 1 = Draft, 2 = Review, 3 = Sent, 4 = Won, 5 = Lost, 6 = Cancelled
    },
    createdAt: {
      createDate: true
    },
    updatedAt: {
      updateDate: true
    }
  },
  relations: {
    sections: {
      target: 'section',
      type: 'one-to-many',
      primary: true,
      inverseSide: 'proposal'
    }
  }
};
