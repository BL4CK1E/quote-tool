/* eslint-disable react/prop-types */

import React from 'react';
import StyledHeading from './styled';

export default function Logo(props) {
  const { isCollapsed, size, white, className } = props;
  return (
    <StyledHeading
      size={size}
      white={white}
      className={className}
      isCollapsed={isCollapsed}
    >
      Proposify
    </StyledHeading>
  );
}
