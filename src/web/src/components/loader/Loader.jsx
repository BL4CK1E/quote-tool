import React from 'react';
import { SpinLoader } from 'react-loaders-spinners';
import StyledLoader from './styled';

// eslint-disable-next-line react/prop-types
const Loader = ({ noParent }) => (
  <StyledLoader noParent={noParent}>
    <SpinLoader
      height={25}
      width={25}
      thickness={4}
      pColor="#2D9CDB"
      sColor="#dcdcdc"
    />
  </StyledLoader>
);

export default Loader;
