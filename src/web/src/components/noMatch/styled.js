import styled from 'styled-components';

const StyledNoMatch = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  strong.nomatch_errorcode {
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 15px;
    position: relative;
  }

  strong.nomatch_errorcode::before {
    content: '';
    height: 1px;
    width: 75px;
    position: absolute;
    background: #cccccc;
    top: 35px;
    right: 160px;
  }

  span.nomatch_errormsg {
    font-size: 12px;
  }

  a {
    font-size: 15px;
    margin-top: 15px;
  }
`;

export default StyledNoMatch;
