/* eslint-disable react/prop-types */

import React from 'react';

import StyledCard from './styled';

export default function Card({ children, width }) {
  return (
    <StyledCard width={width}>
      { children }
    </StyledCard>
  );
}
