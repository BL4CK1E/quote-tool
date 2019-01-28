import styled from 'styled-components';

const StyledHeading = styled.h3`
  font-family: 'Major Mono Display', monospace;
  margin: 15px 5px;
  font-size: ${props => (props.size ? props.size : 'inherit')};
  letter-spacing: -1px;
  text-align: center;
  max-width: 100%;
  color: ${props => (props.white ? 'black' : '#f4f4f4')};
  font-weight: lighter;
  user-select: none;
  position: relative;
  visibility: ${props => (props.isCollapsed ? 'hidden' : 'visible')};

  &.alpha::after {
    content: 'alpha';
    position: relative;
    color: red;
    font-size: 14px;
    height: 14px;
    width: 25px;
    bottom: 0px;
    left: 0px;
  }
`;

export default StyledHeading;
