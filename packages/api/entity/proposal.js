module.exports = {
    name: "Proposal",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: true
        },
        name: {
            type: "varchar",
            length: 60
        },
        description: {
            type: "varchar",
            default: "",
            length: 150
        },
        createdAt: {
            createDate: true
        },
        updatedAt: {
            updateDate: true
        }
    }
}