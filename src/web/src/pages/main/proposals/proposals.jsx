/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import StyledProposalsWrapper from './styled';

import Loader from '../../../components/loader/Loader';
import Card from '../../../components/card/Card';
import CardHead from '../../../components/card/cardHead/CardHead';
import CardBody from '../../../components/card/cardBody/CardBody';
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

  handleModal(e) {
    if (e.target !== this) {
      let { modalIsVisible } = this.state;
      modalIsVisible = !modalIsVisible;
      this.setState({ modalIsVisible });
    }
  }

  render() {
    const { search, modalIsVisible } = this.state;
    return (
      <Query query={GET_PROPOSALS}>
        {({ loading, data }) => (
          <>
            <StyledProposalsWrapper>
              <Card>
                <CardHead>
                  <div className="card-heading">
                    <strong>Proposals</strong>
                  </div>
                  <div>
                    <Button
                      slim
                      value="New Proposal"
                      onClick={this.handleModal}
                    />
                  </div>
                </CardHead>
                <CardBody>
                  <ProposalSearch
                    search={search}
                    handleSearch={this.handleSearch}
                    handleSubmit={this.handleSubmit}
                  />
                  {loading ? (
                    <Loader />
                  ) : (
                    <ProposalTable proposals={data.Proposals} />
                  )}
                </CardBody>
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
