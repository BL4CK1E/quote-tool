import React from 'react';
import { SpinLoader } from 'react-loaders-spinners';
import StyledLoader from './styled';

const Loader = () => (
  <StyledLoader>
    <SpinLoader
      height={20}
      width={20}
      thickness={2}
    />
  </StyledLoader>
);

export default Loader;
