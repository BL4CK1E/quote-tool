import styled from 'styled-components';

const StyledMainLayout = styled.div`
  height:100vh;
  display: grid;
  grid-template-columns: 120px 1fr;
  grid-template-rows: 75px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
`;

const StyledMainLayoutContent = styled.div`
  padding: 15px;
  background:#f5f5f5;
  grid-column-start:2;
  grid-column-end: 3;
  grid-row-start:2;
  grid-row-end:3;
`;

export {
  StyledMainLayout,
  StyledMainLayoutContent,
};
