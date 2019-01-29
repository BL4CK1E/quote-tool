import React from 'react';
import PropTypes from 'prop-types';
import StyledCardBody from './styled';

export default function CardBody({ children }) {
  return <StyledCardBody>{children}</StyledCardBody>;
}

CardBody.propTypes = {
  children: PropTypes.node.isRequired
};
