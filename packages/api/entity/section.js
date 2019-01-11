module.exports = {
    name: "Section",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        title: {
            type: "varchar",
            length: 60,
            default: "New Section"
        },
        order: {
            type: "int"
        }
    },
    relations: {
      proposal: {
          target: "Proposal",
          type: "many-to-one",
          cascade: true,
          joinColumn: true
      }
  }
}