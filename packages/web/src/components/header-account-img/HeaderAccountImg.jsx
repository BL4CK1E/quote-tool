/* eslint-disable react/prop-types */

import React from 'react';

import StyledAccountImage from './styled';

import defaultAvatar from './default-avatar.png';

const HeaderAccountImage = ({ img, name }) => (
  <StyledAccountImage src={img || defaultAvatar} alt={name || 'user-profile'} />
);

export default HeaderAccountImage;
