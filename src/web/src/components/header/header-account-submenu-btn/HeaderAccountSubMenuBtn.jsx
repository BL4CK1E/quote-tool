/* eslint-disable react/prop-types */

import React from 'react';

import StyledSubMenuButton from './styled';

const HeaderAccountSubMenuBtn = ({
  value,
  type,
  name,
  onClick,
}) => (
  <StyledSubMenuButton
    onClick={onClick}
    name={name || 'sub-menu-button'}
    type={type || 'button'}
  >
    {value}
  </StyledSubMenuButton>
);

export default HeaderAccountSubMenuBtn;
