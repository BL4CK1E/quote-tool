import styled from 'styled-components';

const StyledHeading = styled.h3`
  height: 75px;
  text-align: center;
  max-width: 100%;
  color: #f5f5f5;
  font-weight: lighter;
  visibility: ${props => (props.isCollapsed ? 'hidden' : 'visible')};
`;

export default StyledHeading;
