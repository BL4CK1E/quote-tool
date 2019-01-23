/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import StyledProposalsWrapper from './styled';

import Card from '../../../components/card/Card';
import ProposalSearch from '../../../components/proposal-search/ProposalSearch';

class Proposals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearch() {}

  handleSubmit() {}

  render() {
    const { search } = this.state;
    return (
      <StyledProposalsWrapper>
        <Card padding="15px">
          <strong>Proposals</strong>
          <ProposalSearch
            search={search}
            handleSearch={this.handleSearch}
            handleSubmit={this.handleSubmit}
          />
        </Card>
      </StyledProposalsWrapper>
    );
  }
}

export default Proposals;
