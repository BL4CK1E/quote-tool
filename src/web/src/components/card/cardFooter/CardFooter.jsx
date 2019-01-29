import React from 'react';
import PropTypes from 'prop-types';
import StyledCardFooter from './styled';

export default function CardFooter({ children, split }) {
  return <StyledCardFooter split={split}>{children}</StyledCardFooter>;
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  split: PropTypes.bool
};

CardFooter.defaultProps = {
  split: false
};
