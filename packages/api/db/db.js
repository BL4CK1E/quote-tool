const typeorm = require("typeorm")
const createConnection = typeorm.createConnection
const EntitySchema = typeorm.EntitySchema

const connection = async () => {

    const db = await createConnection({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "quote_tool_write_read",
        password: "quote_tool",
        database: "quoteTool",
        // logging: ["query", "errors"],
        dropSchema: true,
        synchronize: true,
        entities: [
            new EntitySchema(require("../entity/product")),
            new EntitySchema(require("../entity/proposal")),
            new EntitySchema(require("../entity/section"))
        ]
    })

    return db

} 

module.exports = connection