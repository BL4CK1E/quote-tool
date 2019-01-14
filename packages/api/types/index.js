const { gql } = require('apollo-server-express')

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

  type Query {

    # Proposal Queries
    Proposals: [Proposal]
    Proposal( id: Int! ): Proposal

    # Section Queries
    Sections( id: Int! ): [Section]
    Section( id: Int! ): Section

  }

  input SectionInput {
    name: String!
  }

  type Mutation {

    # Proposal Mutations
    addProposal( name: String!, description: String, sections: [SectionInput]): Proposal
    updateProposal( id: Int!, name: String, description: String ) : Proposal
    deleteProposal( id: Int!, name: String! ): Proposal

    # Section Mutations
    addSection( name: String!, order: Int!, proposal_id: Int! ): Section
    createSection( name: String!, order: Int!, proposal_id: Int! ): Section
    updateSection( name: String, order: Int, proposal_id: Int! ): Section
    deleteSection( id: Int! ): Section

  }

`;

module.exports = typeDefs