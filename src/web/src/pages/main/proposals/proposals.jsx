/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import StyledProposalsWrapper from './styled';

import Card from '../../../components/card/Card';
import CardHead from '../../../components/card/cardHead/CardHead';
import Button from '../../../components/button/Button';
import ProposalSearch from '../../../components/proposal-search/ProposalSearch';
import ProposalTable from '../../../components/proposal-table/proposalTable';
import Modal from '../../../components/modal/Modal';
import ProposalCreateForm from '../../../components/proposal-create-form/ProposalCreateForm';

import { GET_PROPOSALS } from '../../../graphql/modules/proposal';

class Proposals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      modalIsVisible: true
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleSearch() {}

  handleSubmit() {}

  handleModal() {
    let { modalIsVisible } = this.state;
    modalIsVisible = !modalIsVisible;
    this.setState({ modalIsVisible });
  }

  render() {
    const { search, modalIsVisible } = this.state;
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
                    <Button
                      slim
                      value="Create Proposal"
                      onClick={this.handleModal}
                    />
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
            <Modal hidden={modalIsVisible} closeModal={this.handleModal}>
              <ProposalCreateForm closeModal={this.handleModal} />
            </Modal>
          </>
        )}
      </Query>
    );
  }
}

export default Proposals;
