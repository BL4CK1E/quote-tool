import styled from 'styled-components';

const StyledSubMenuButton = styled.button`
  height: 35px;
  text-align: left;
  padding-left: 15px;
  color: #fff;
  width: 100%;
  background: none;
  border: none;
  transition: all 0.1s;
  text-decoration: none;
  user-select: none;

  /* Hover */
  :hover {
    background: rgba(255, 255, 255, 0.05);
    cursor: pointer;
  }
`;

export default StyledSubMenuButton;
