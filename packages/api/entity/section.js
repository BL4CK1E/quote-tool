const { SECTION } = require('../utilities/constants')

module.exports = {
    name: SECTION,
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 60,
            default: "New Section"
        },
        order: {
            type: "int"
        },
        proposal_id: {
            type: "int",
        }
    },
    relations: {
      proposal: {
          target: "proposal",
          type: "many-to-one",
          joinColumn: {
            name: "proposal_id",
            referencedColumnName: "id"
          },
          primary: true
      }
  }
}