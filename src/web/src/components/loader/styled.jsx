import styled from 'styled-components';

const StyledLoader = styled.div`
    height: ${props => (props.noParent ? '100vh' : '100%')};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default StyledLoader;
