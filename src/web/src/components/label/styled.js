import styled from 'styled-components';

const StyledLabel = styled.label`
  display: block;
  font-size: 0.7rem;
  font-weight: 600;
  color: gray;
  margin-top: 0.5rem;
  margin-left: 0.1rem;

  ::after {
    content: '*';
    color: red;
    position: relative;
    visibility: ${props => (props.isRequired ? 'visible' : 'hidden')};
    font-size: 1rem;
    left: 2.5px;
  }
`;

export default StyledLabel;
