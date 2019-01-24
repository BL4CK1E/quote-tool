/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Query } from "react-apollo";
import StyledProposalsWrapper from "./styled";

import Card from "../../../components/card/Card";
import ProposalSearch from "../../../components/proposal-search/ProposalSearch";
import ProposalTable from "../../../components/proposal-table/proposalTable";

import { GET_PROPOSALS } from "../../../graphql/modules/proposal";

class Proposals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch() {}

  handleSubmit() {}

  render() {
    const { search } = this.state;
    return (
      <Query query={GET_PROPOSALS}>
        {({ _, __, data }) => (
          <StyledProposalsWrapper>
            <Card padding="15px">
              <strong>Proposals</strong>
              <ProposalSearch
                search={search}
                handleSearch={this.handleSearch}
                handleSubmit={this.handleSubmit}
              />
              <ProposalTable proposals={data} />
            </Card>
          </StyledProposalsWrapper>
        )}
      </Query>
    );
  }
}

export default Proposals;
