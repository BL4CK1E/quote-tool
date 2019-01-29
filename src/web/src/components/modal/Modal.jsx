import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledModal,
  StyledModalBackground,
  StyledModalContent
} from './styled';

export default function Modal({ children, closeModal, hidden }) {
  return (
    <StyledModal hidden={hidden}>
      <StyledModalBackground className="background" onClick={closeModal} />
      <StyledModalContent className="content">{children}</StyledModalContent>
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
