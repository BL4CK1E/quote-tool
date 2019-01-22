import styled from 'styled-components';

const StyledInput = styled.input`
    padding: 10px 15px;
    margin: 5px 0;
    font-size: 16px;
    outline-offset: none;
    border-radius: 5px;
    border: 1px solid rgba(0,40,100,0.2);

    ::placeholder {
        color: rgba(0,0,0,0.5)
    }

`;

export default StyledInput;
