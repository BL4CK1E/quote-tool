import styled from 'styled-components';

const NavigationWrapper = styled.div`
  height: 100vh;
  background: #2d2d2d;
  width: 120px;
  position: fixed;
  grid-row-start: 1;
  grid-row-end: 3;
  transition: all 0.1s;
  z-index: 100;
  width: ${props => (props.isCollapsed ? '50px' : '120px')};
`;

export default NavigationWrapper;
