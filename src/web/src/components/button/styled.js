import styled from 'styled-components';

const StyledButton = styled.button`
  background: #2d9cdb;
  border: none;
  border-radius: 2px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  width: ${props => (props.width ? props.width : '150px')};
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  outline: none !important;
  padding: 0.75rem 2rem;
  text-align: center;

  :hover {
    background: #2a8fc7;
  }
`;

export default StyledButton;
