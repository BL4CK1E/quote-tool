/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';

import Card from '../card/Card';
import CardHead from '../card/cardHead/CardHead';
import CardBody from '../card/cardBody/CardBody';
import CardFooter from '../card/cardFooter/CardFooter';
import Label from '../label/Label';
import Input from '../input/Input';
import StyledProposalCreateForm from './styled';

class ProposalCreateForm extends Component {
  render() {
    return (
      <Card width="700px">
        <CardHead split>
          <strong>Create Proposal</strong>
        </CardHead>
        <CardBody>
          <StyledProposalCreateForm>
            <div>
              <Label value="Title" />
              <Input compact width="100%" />
            </div>
            <div>
              <Label value="Customer" />
              <Input compact width="100%" />
            </div>
            <div>
              <Label value="Opportunity" />
              <Input compact width="100%" />
            </div>
            <div>
              <Label value="Owner" />
              <Input compact width="100%" />
            </div>
          </StyledProposalCreateForm>
        </CardBody>
        <CardFooter>Cancel | Submit</CardFooter>
      </Card>
    );
  }
}

export default ProposalCreateForm;
