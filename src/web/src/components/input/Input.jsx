/* eslint-disable react/prop-types */

import React from 'react';

import StyledInput from './styled';

export default function Input(props) {
  const {
    type,
    value,
    name,
    id,
    onChange,
    placeholder,
  } = props;
  return (
    <StyledInput
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
}
