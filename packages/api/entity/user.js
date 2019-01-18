const { USER } = require('../utilities/constants');

module.exports = {
  name: USER,
  uniques: [{
    columns: ['username', 'email'],
  }],
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    username: {
      type: 'varchar',
      length: 60,
      nullable: false,
    },
    password: {
      type: 'varchar',
      nullable: false, // Hashed Only
    },
    email: {
      type: 'varchar',
      nullable: false,
    },
    firstName: {
      type: 'varchar',
      nullable: false,
    },
    lastName: {
      type: 'varchar',
      nullable: false,
    },
    auth: {
      type: 'int',
      default: '1', // 1 = General, // 2 = Admin, 3 = Super Admin
      nullable: false,
    },
    status: {
      type: 'int',
      default: '1', // 1 = Pending Confirmation, // 2 = Approved, 3 = Deactivated
      nullable: false,
    },
  },
};
