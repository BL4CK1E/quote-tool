const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type Proposal {
    id: Int
    name: String
    description: String 
    createdAt: String
    updatedAt: String
    sections: [Section]
  }

  type Section {
    id: Int
    name: String
    order: Int
    proposal_id: Int
  }

  type Product {
    id: Int
    name: String
    description: String
    sku: String
    mpn: String
    cost: Float
    sell: Float
    rrp: Float
    "Recurring Values (Default: 1): 1 = Upfront  2 = Monthly 3 = Annual"
    recurring: Int
    "Status Flag (Default: 1): 1 = Active 2 = Inactive"
    status: Int
  }

  type User {
    id: Int
    username: String
    email: String
    firstName: String
    lastName: String
    auth: Int
    status: Int
  }

  # Queries
  type Query {

    # Proposal Queries
    Proposals: [Proposal]
    Proposal( id: Int! ): Proposal

    # Section Queries
    Sections( id: Int! ): [Section]
    Section( id: Int! ): Section

    # Product Queries
    Products( status: Int ): [Product]
    Product( id: Int!, status: Int): Product

  }

  # Inputs (Reusable Arguments)
  input SectionInput {
    name: String! 
    order: Int!
    proposal_id: Int!
  }

  input ProductInput {
    "Product ID: Required to find a product"
    id: Int
    "Product Name"
    name: String
    "Product Description"
    description: String
    sku: String
    mpn: String
    cost: Float 
    sell: Float 
    rrp: Float 
    "Recurring Values (Default: 1): 1 = Upfront  2 = Monthly 3 = Annual "
    recurring: Int
    "Status Flag (Default: 1): 1 = Active 2 = Inactive"
    status: Int
  }

  input MoveInput {
    parentId: Int!
    from: Int!
    to: Int!
  }

  input NewUserInput {
    username: String!
    password: String!
    email: String!
    firstName: String!
    lastName: String!
  }

  # Mutations
  type Mutation {

    # Proposal Mutations
    addProposal( name: String!, description: String, sections: [SectionInput]): Proposal
    updateProposal( id: Int!, name: String, description: String ) : Proposal
    deleteProposal( id: Int!, name: String! ): Proposal

    # Section Mutations
    addSection( data: SectionInput ): Section
    updateSection( data: SectionInput ): Section
    updateSectionOrder( data: MoveInput ): [Section] 
    deleteSection( id: Int! ): Section

    # Product Mutation
    addProducts( products: [ProductInput] ): [Product]
    updateProduct( product: ProductInput ): Product

    # User Mutation
    createUser( data: NewUserInput ): User
    authUser( username: String!, password: String! ): User

  }

`;

module.exports = typeDefs;
