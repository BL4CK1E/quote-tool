import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './styled';

export default function Button({
  value,
  name,
  type,
  primary,
  secondary,
  onClick,
  width,
  form,
  disabled,
  slim,
  autofocus
}) {
  return (
    <StyledButton
      name={name}
      type={type}
      form={form}
      disabled={disabled}
      onClick={onClick}
      width={width}
      autoFocus={autofocus}
      slim={slim}
      primary={primary}
      secondar={secondary}
    >
      {value}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  value: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  form: PropTypes.string,
  width: PropTypes.string,
  slim: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  autofocus: PropTypes.bool
};

Button.defaultProps = {
  onClick: () => {},
  value: 'Button',
  name: '#',
  type: 'Button',
  form: '#',
  width: 'auto',
  slim: false,
  primary: false,
  secondary: false,
  disabled: false,
  autofocus: false
};
