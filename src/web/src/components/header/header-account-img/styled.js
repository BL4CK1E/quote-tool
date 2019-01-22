import styled from 'styled-components';

const StyledAccountImage = styled.div`
    height: 30px;
    width: 30px;
    min-height: 30px;
    min-width: 30px;
    margin-left: 15px;
    border-radius: 25px;
    border: 1px solid #E0E0E0;
    background-image: ${props => `url('${props.src}')`};
    background-size: contain;
`;

export default StyledAccountImage;
