import styled from 'styled-components';

const StyledMainLayout = styled.div`
  height:100vh;
  display: grid;
  grid-template-rows: 50px 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  justify-items: stretch;
  align-items: stretch;
  transition: all 0.2s;
  grid-template-columns: ${props => (props.isCollapsed ? '50px 1fr' : '120px 1fr')};
`;

const StyledMainLayoutContent = styled.div`
  padding: 15px;
  grid-column-start:2;
  grid-column-end: 3;
  grid-row-start:2;
  grid-row-end:3;
`;

export {
  StyledMainLayout,
  StyledMainLayoutContent,
};
