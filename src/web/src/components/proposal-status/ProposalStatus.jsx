import React from 'react';
import PropTypes from 'prop-types';
import StyledStatus from './styled';

export default function ProposalStatus({ status }) {
  const statuses = ['Draft', 'Sent', 'Won', 'Lost', 'Cancelled'];
  return <StyledStatus>{statuses[status - 1]}</StyledStatus>;
}

ProposalStatus.propTypes = {
  status: PropTypes.number.isRequired
};
