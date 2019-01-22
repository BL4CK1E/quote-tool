/* eslint-disable react/prop-types */

import React from 'react';

import StyledAccountSubMenu from './styled';

const HeaderAccountSubMenu = ({ children, isCollapsed }) => (
  <StyledAccountSubMenu isCollapsed={isCollapsed}>{children}</StyledAccountSubMenu>
);

export default HeaderAccountSubMenu;
