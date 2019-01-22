import styled from 'styled-components';

const StyledHeading = styled.h3`
  font-family: 'Major Mono Display', monospace;
  height: 25px;
  margin: 15px 5px;
  font-size: ${props => (props.size ? props.size : 'inherit')};
  letter-spacing: -1px;
  text-align: center;
  max-width: 100%;
  color: ${props => (props.white ? 'black' : '#f4f4f4')};
  font-weight: lighter;
  user-select: none;
  visibility: ${props => (props.isCollapsed ? 'hidden' : 'visible')};
`;


export default StyledHeading;
