import styled from 'styled-components';

const StyledSubMenuButton = styled.button`
  height: 35px;
  text-align: left;
  padding-left: 15px;
  font-size: 14px;
  color: #010;
  width:100%;
  background: none;
  border: none;
  transition:all 0.1s;
  text-decoration: none;
  user-select: none;

  /* Hover */
  :hover { 
      background: #2D9CDB;
      color: white;
      cursor: pointer;
   }

`;

export default StyledSubMenuButton;
