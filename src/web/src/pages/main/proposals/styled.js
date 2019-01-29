import styled from 'styled-components';

const StyledProposalsWrapper = styled.div`
  position: relative;
  height: 100%;

  & .card-heading {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  & table {
    border-spacing: 0;
  }

  & table thead tr {
    border: 0;
    background: rgba(0, 0, 0, 0.05);
  }

  & table thead tr th,
  & table tbody tr td {
    text-align: left;
    align-items: center;
    height: 30px;
    font-size: 12px;
  }

  & table thead tr th,
  & table tbody tr td {
    padding: 0 5px;
  }

  & table tbody tr td a {
    color: #2d9cdb;
  }

  & table tbody tr {
    height: 45px;
  }

  & table tbody tr:hover {
    background: #fbfbfb;
  }

  /*  Sizings */
  & table thead tr th:nth-of-type(1),
  & table tbody tr td:nth-of-type(1) {
    width: 175px;
  }

  & table thead tr th:nth-of-type(2),
  & table tbody tr td:nth-of-type(2) {
    width: 40%;
  }

  & table thead tr th:nth-of-type(3),
  & table thead tr th:nth-of-type(4),
  & table thead tr th:nth-of-type(5) {
    width: 250px;
  }

  & table thead tr th:nth-of-type(7),
  & table tbody tr td:nth-of-type(7) {
    width: 200px;
    text-align: right;
  }
`;

export default StyledProposalsWrapper;
