
import React from 'react';
import StyledNavigationLogo from './styled';

export default function NavigationLogo(props) {
  // eslint-disable-next-line react/prop-types
  const { img } = props;
  return (
    <StyledNavigationLogo src={img} />
  );
}
