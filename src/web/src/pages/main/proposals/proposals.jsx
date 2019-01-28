/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from "react";
import { Query } from "react-apollo";
import StyledProposalsWrapper from "./styled";

import Card from "../../../components/card/Card";
import CardHead from "../../../components/card/cardHead/CardHead";
import Button from "../../../components/button/Button";
import ProposalSearch from "../../../components/proposal-search/ProposalSearch";
import ProposalTable from "../../../components/proposal-table/proposalTable";
import Modal from "../../../components/modal/Modal";

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
        {({ data }) => (
          <>
            <StyledProposalsWrapper>
              <Card padding="15px">
                <CardHead>
                  <div>
                    <strong>Proposals</strong>
                  </div>
                  <div>
                    <Button slim value="Create Proposal" />
                  </div>
                </CardHead>
                <ProposalSearch
                  search={search}
                  handleSearch={this.handleSearch}
                  handleSubmit={this.handleSubmit}
                />
                <ProposalTable proposals={data.Proposals} />
              </Card>
            </StyledProposalsWrapper>
            <Modal>test</Modal>
          </>
        )}
      </Query>
    );
  }
}

export default Proposals;
