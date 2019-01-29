import React from 'react';
import PropTypes from 'prop-types';
import StyledCardHead from './styled';

export default function CardHead({ children, split }) {
  return <StyledCardHead split={split}>{children}</StyledCardHead>;
}

CardHead.propTypes = {
  children: PropTypes.node.isRequired,
  split: PropTypes.bool
};

CardHead.defaultProps = {
  split: false
};
