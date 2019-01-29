import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  display: ${props => (props.hidden ? 'none' : 'flex')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledModalBackground = styled.div`
  background: rgba(0, 0, 0, 0.75);
  height: 100%;
  width: 100%;
`;

const StyledModalContent = styled.div`
  position: absolute;
`;

export { StyledModal, StyledModalBackground, StyledModalContent };
