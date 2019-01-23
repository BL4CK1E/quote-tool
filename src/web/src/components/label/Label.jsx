import React from 'react';
import PropTypes from 'prop-types';
import StyledLabel from './styled';

export default function Label({ value, targetField, targetForm, isRequired }) {
  return (
    <StyledLabel
      htmlFor={targetField}
      form={targetForm}
      isRequired={isRequired}
    >
      {value}
    </StyledLabel>
  );
}

Label.propTypes = {
  value: PropTypes.string,
  targetField: PropTypes.string.isRequired,
  targetForm: PropTypes.string,
  isRequired: PropTypes.bool
};

Label.defaultProps = {
  value: 'Label',
  targetForm: '',
  isRequired: false
};
