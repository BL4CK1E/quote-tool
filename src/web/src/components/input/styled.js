import styled from 'styled-components';

const StyledInput = styled.input`
  padding: ${props => (props.compact ? '5px 10px' : '10px 15px')};
  margin: 5px 0;
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : 'auto')};
  font-size: ${props => (props.compact ? '13px' : '16px')};
  outline-offset: none;
  border-radius: 5px;
  border: 1px solid rgba(0, 40, 100, 0.2);

  ::placeholder {
    color: rgba(0, 0, 0, 0.5);
    font-size: 13px;
  }
`;

export default StyledInput;
