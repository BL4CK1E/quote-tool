import React, { Component } from 'react';

import StyledProposalSearch from './styled';
import Input from '../input/Input';
import Label from '../label/Label';

export default class ProposalSearch extends Component {
  render() {
    return (
      <StyledProposalSearch>
        <div>
          <Label targetField="proposal-search" value="Search for a proposal" />
          <Input
            name="proposal-search"
            id="proposal-search"
            compact
            placeholder="Proposal Number, Name, Company, Status"
          />
        </div>
      </StyledProposalSearch>
    );
  }
}
