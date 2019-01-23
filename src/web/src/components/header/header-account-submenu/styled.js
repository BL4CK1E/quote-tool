import styled from 'styled-components';

const StyledAccountSubMenu = styled.div`
  /* height: ${props => (props.isCollapsed ? '100%' : '')}; */
  opacity: ${props => (props.isCollapsed ? '1' : '0')};
  visibility: ${props => (props.isCollapsed ? 'visible' : 'hidden')};
  min-width: 150px;
  color: #fff;
  border: 1px solid #e0e0e0;
  background: #2d2d2d;
  position: absolute;
  z-index: 25;
  top: 100%;
  right: 10px;

  div.activeUser {
    opacity: 0.8;
    height: 35px;
    display:flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 15px;
  }
`;

export default StyledAccountSubMenu;
