import styled from 'styled-components';

const StyledStatus = styled.span`
  position: relative;
  margin-left: 12px;

  ::after {
    content: '';
    position: absolute;
    height: 6px;
    width: 6px;
    top: 4px;
    border-radius: 5px;
    left: -12px;
    background: #ffb100;
  }
`;

export default StyledStatus;
