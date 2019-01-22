import styled from 'styled-components';

const NavigationBtnWrp = styled.div`
  height: 20px;
  font-size: 14px;
  color: #ffffff;
  transition: border 0.25s;
  text-decoration: none;
  user-select: none;

  /* Hover */
  :hover { 
      background: rgba(255,255,255,0.05);
      cursor: pointer;
   }

  /* Active */
  background: ${props => (props.active ? 'rgba(255,255,255,0.1)' : '')};
  border-left: ${props => (props.active ? '5px solid #2D9CDB' : '5px solid rgba(0,0,0,0)')};
  padding: ${props => (props.active ? '12.5px 0 12.5px 15px' : '12.5px 0 12.5px 15px')};

  /* Is Collapsed */
  text-align: ${props => (props.isCollapsed ? 'center' : 'left')};
  padding: ${props => (props.isCollapsed ? '15px 0 10px 0px' : '12.5px 0 12.5px 15px')};

  & > svg {
    margin-right: 4px;
  }

`;

const NavigationBtmBtnWrp = styled(NavigationBtnWrp)`
  position: absolute;
  bottom:0;
  width: ${props => (props.isCollapsed ? '45px' : '100px')};
`;

export {
  NavigationBtnWrp,
  NavigationBtmBtnWrp,
};
