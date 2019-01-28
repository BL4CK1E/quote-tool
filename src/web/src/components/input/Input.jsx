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
    compact,
    width
  } = props;
  return (
    <StyledInput
      compact={compact}
      type={type}
      value={value}
      width={width}
      name={name}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
    />
  );
}
