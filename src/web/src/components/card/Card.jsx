/* eslint-disable react/prop-types */

import React from 'react';

import StyledCard from './styled';

export default function Card({ children, width, padding, height }) {
  return (
    <StyledCard width={width} height={height}>
      {children}
    </StyledCard>
  );
}
