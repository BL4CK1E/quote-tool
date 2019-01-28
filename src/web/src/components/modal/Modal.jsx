import React from 'react';
import PropTypes from 'prop-types';
import StyledModal from './styled';

export default function Modal({ children, closeModal, hidden }) {
  return (
    <StyledModal hidden={hidden} onClick={closeModal}>
      {children}
    </StyledModal>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
  hidden: PropTypes.bool
};

Modal.defaultProps = {
  hidden: true
};
