const { PROPOSAL } = require('../utilities/constants');

module.exports = {
  name: PROPOSAL,
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 60,
    },
    description: {
      type: 'varchar',
      default: '',
      length: 150,
    },
    createdAt: {
      createDate: true,
    },
    updatedAt: {
      updateDate: true,
    },
  },
  relations: {
    sections: {
      target: 'section',
      type: 'one-to-many',
      primary: true,
      inverseSide: 'proposal',
    },
  },
};
