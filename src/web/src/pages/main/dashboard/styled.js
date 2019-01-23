import styled from 'styled-components';

const StyledDashboard = styled.div`
  height: 500px;
  text-align: center;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  h2,
  h3,
  span {
    animation: fadeIn 2s forwards;
    user-select: none;
  }

  h2 {
    position: relative;
    margin: 0;
    font-weight: 200;
  }

  span {
    margin-top: 5px;
    font-weight: 200;
  }
`;

export default StyledDashboard;
