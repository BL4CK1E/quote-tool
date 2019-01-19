const { PRODUCT } = require('../utilities/constants');

module.exports = {
  name: PRODUCT,
  uniques: [{
    columns: ['sku'],
  }],
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    name: {
      type: 'varchar',
      length: 150,
      nullable: false,
    },
    description: {
      type: 'varchar',
      nullable: false,
      default: '',
    },
    sku: {
      type: 'varchar',
      nullable: false,
    },
    mpn: {
      type: 'varchar',
      nullable: false,
    },
    cost: {
      type: 'decimal',
      precision: 9,
      scale: 2,
      nullable: false,
      default: 0.00,
    },
    sell: {
      type: 'decimal',
      precision: 9,
      scale: 2,
      nullable: false,
      default: 0.00,
    },
    rrp: {
      type: 'decimal',
      precision: 9,
      scale: 2,
      nullable: false,
      default: 0.00,
    },
    recurring: {
      type: 'int',
      nullable: false,
      default: 1, // 1 = Upfront, 2 = Monthly, 3 = Annual
    },
    status: {
      type: 'int',
      nullable: false,
      default: 1, // 1 = Active, 2 = Inactive
    },
  },
};
