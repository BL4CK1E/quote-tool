import styled from "styled-components";

const StyledProposalsWrapper = styled.div`
  height: 100%;

  & table thead tr {
    display: flex;
    background: rgba(0, 0, 0, 0.05);
  }

  & table thead tr th {
    text-align: left;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 30px;
    font-size: 12px;
  }

  & table thead tr th:nth-of-type(1) {
    width: 125px;
  }

  & table thead tr th:nth-of-type(2) {
    width: 75%;
  }

  & table thead tr th:nth-of-type(3),
  & table thead tr th:nth-of-type(4),
  & table thead tr th:nth-of-type(5) {
    width: 250px;
  }

  & table thead tr th:nth-of-type(6) {
    width: 100px;
    justify-content: flex-end;
  }
`;

export default StyledProposalsWrapper;
