/* eslint-disable react/prop-types */
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import StyledCollapseBtn from './styled';

export default function CollapseBtn(props) {
  const { onClick, isCollapsed } = props;
  return (
    <StyledCollapseBtn onClick={onClick}>
      { (isCollapsed ? <FontAwesomeIcon icon="caret-square-right" /> : <FontAwesomeIcon icon="caret-square-left" />) }
    </StyledCollapseBtn>
  );
}
