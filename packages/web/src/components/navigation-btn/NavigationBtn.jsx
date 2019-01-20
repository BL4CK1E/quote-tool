/* eslint-disable react/prop-types */
import React from 'react';
import NavigationBtnWrp from './styled';

const NavigationBtn = (props) => {
  const {
    name,
    active,
    bottom,
    onClick,
  } = props;

  return (
    <NavigationBtnWrp onClick={onClick} active={active} bottom={bottom}>
      { name }
    </NavigationBtnWrp>);
};

export default NavigationBtn;
