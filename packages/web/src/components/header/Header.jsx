import React from 'react';

import StyledHeader from './styled';

const Header = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;
  return (
    <StyledHeader>
      { children }
    </StyledHeader>
  );
}

export default Header;
