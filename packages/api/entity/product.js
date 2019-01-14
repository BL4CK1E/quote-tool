module.exports = {
  name: "product",
  columns: {
    id : {
      primary: true,
      type: "int",
      generated: true
    },
    name : {
      type: "varchar"
    },
    description: {
      type: "varchar"
    },
    sku: {
      type: "varchar"
    },
    mpn: {
      type: "varchar"
    },
    cost: {
      type: "float"
    },
    sell: {
      type: "float"
    },
    rrp: {
      type: "float"
    },
    recurring: {
      type: "int", 
      default: 1 // 1 = Upfront, 2 = Monthly, 3 = Annual
    }
  }
}