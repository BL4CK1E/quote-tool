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
    Proposals: [Proposal]
    Proposal( id: Int! ): Proposal
    Sections( id: Int! ): [Section]
    Section( id: Int! ): Section
  }

  type Mutation {

    # Proposal Mutations
    addProposal( name: String!, description: String ): Proposal
    updateProposal( id: Int!, name: String, description: String ) : Proposal
    deleteProposal( id: Int!, name: String! ): Proposal

    # Section Mutations
    addSection( name: String!, order: Int!, proposal_id: Int! ): Section
    createSection( name: String!, order: Int!, proposal_id: Int! ): Section
    updateSection( name: String!, order: Int!, proposal_id: Int! ): Section
    updateSections( name: String!, order: Int!, proposal_id: Int! ): Section

  }

`;

module.exports = typeDefs