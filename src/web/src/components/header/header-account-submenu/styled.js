import styled from 'styled-components';

const StyledAccountSubMenu = styled.div`
    height: ${props => (props.isCollapsed ? 'auto' : '0px')};
    opacity: ${props => (props.isCollapsed ? '1' : '0')};
    visibility: ${props => (props.isCollapsed ? 'visible' : 'hidden')};
    width: 50px;
    min-width: 150px;
    border: 1px solid #E0E0E0;
    background: #fff;
    position: absolute;
    z-index: 25;
    top: 100%;
    right: 10px;
    background-size: contain;
    transition: all 0.s;
`;

export default StyledAccountSubMenu;
