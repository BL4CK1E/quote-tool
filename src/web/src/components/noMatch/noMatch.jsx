/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../button/Button';

import StyledNoMatch from './styled';

const NoMatch = () => (
  <StyledNoMatch>
    <div>
      <strong className="nomatch_errorcode">404</strong>
      <span className="nomatch_errormsg">
        We could not find the resource or you do not have permissions to access
        it
      </span>
      <Link to="/">
        <Button secondary value="Return Home" width="200px" />
      </Link>
    </div>
  </StyledNoMatch>
);

export default NoMatch;
