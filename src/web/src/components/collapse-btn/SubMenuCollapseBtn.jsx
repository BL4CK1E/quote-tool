/* eslint-disable react/prop-types */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { StyledSubMenuCollapseBtn } from './styled';

export default function SubMenuCollapseBtn(props) {
  const { onClick, isCollapsed } = props;
  return (
    <StyledSubMenuCollapseBtn onClick={onClick}>
      { (isCollapsed ? <FontAwesomeIcon icon="chevron-up" /> : <FontAwesomeIcon icon="chevron-down" />) }
    </StyledSubMenuCollapseBtn>
  );
}
