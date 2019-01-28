/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavigationBtmBtnWrp, NavigationBtnWrp } from './styled';

const NavigationBtn = (props) => {
  const {
    name,
    icon,
    active,
    bottom,
    isCollapsed,
    onClick,
  } = props;

  return (bottom ? (
    <NavigationBtmBtnWrp
      name={name}
      onClick={onClick}
      active={active}
      isCollapsed={isCollapsed}
    >
      {(isCollapsed ? <FontAwesomeIcon icon={icon} /> : name)}
    </NavigationBtmBtnWrp>
  ) : (
    <NavigationBtnWrp
      name={name}
      onClick={onClick}
      active={active}
      isCollapsed={isCollapsed}
    >
      {(isCollapsed ? <FontAwesomeIcon icon={icon} /> : name)}
    </NavigationBtnWrp>)
  );
};

export default NavigationBtn;
