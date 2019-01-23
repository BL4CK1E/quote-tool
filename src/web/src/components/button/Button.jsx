import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled';

export default function Button({
  value,
  name,
  type,
  primary,
  secondary,
  width,
  form,
  disabled,
  autofocus
}) {
  return (
    <StyledButton
      name={name}
      type={type}
      form={form}
      disabled={disabled}
      width={width}
      autoFocus={autofocus}
      primary={primary}
      secondar={secondary}
    >
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.string,
  width: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  autofocus: PropTypes.bool
};

Button.defaultProps = {
  value: 'Button',
  name: '#',
  type: 'Button',
  form: '#',
  width: 'auto',
  primary: false,
  secondary: false,
  disabled: false,
  autofocus: false
};
