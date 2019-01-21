import styled from 'styled-components';

const StyledCollapseBtn = styled.div`
  height: 20px;
  font-size: 14px;
  color: #ffffff;
  transition: border 0.25s;
  border-left: 5px solid rgba(255,255,255,0.0);
  text-decoration: none;
  opacity: 0.5;
  user-select: none;

  /* Hover */
  :hover { 
      background: rgba(255,255,255,0.05);
      cursor: pointer;
   }

  /* Is Collapsed */
  text-align: ${props => (props.isCollapsed ? 'center' : 'left')};
  padding: ${props => (props.isCollapsed ? '15px 0 10px 0px' : '12.5px 0 12.5px 15px')};

`;

const StyledSubMenuCollapseBtn = styled(StyledCollapseBtn)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: black;
  height: 35px;
  border: none;
  padding: 0 10px;
`;

export {
  StyledCollapseBtn,
  StyledSubMenuCollapseBtn,
};
