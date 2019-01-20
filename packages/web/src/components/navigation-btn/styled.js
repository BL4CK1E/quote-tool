import styled from 'styled-components';

const NavigationBtnWrp = styled.div`
  height: 20px;
  font-size: 14px;
  color: white;
  transition: border 0.25s;

  /* Hover */
  :hover { 
      background: rgba(255,255,255,0.05);
      cursor: pointer;
   }

  /* Active */
  background: ${props => (props.active ? 'rgba(255,255,255,0.1)' : '')};
  border-left: ${props => (props.active ? '5px solid #2D9CDB' : '5px solid rgba(0,0,0,0)')};
  padding: ${props => (props.active ? '12.5px 0 12.5px 15px' : '12.5px 0 12.5px 15px')};

  /* Bottom Align */
  position: ${props => (props.bottom ? 'absolute' : '')};
  bottom: ${props => (props.bottom ? '0px' : '')};
  width: ${props => (props.bottom ? '100%' : '')};
`;

export default NavigationBtnWrp;
