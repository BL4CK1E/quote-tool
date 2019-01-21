/* eslint-disable react/prop-types */

import React from 'react';
import StyledHeading from './styled';

export default function NavigationLogo(props) {
  const { isCollapsed } = props;
  return (
    <StyledHeading isCollapsed={isCollapsed}>Proposify</StyledHeading>
  );
}
