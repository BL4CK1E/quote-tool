import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import StyledAuthorization from './styled';

import Card from '../../components/card/Card';
import Logo from '../../components/logo/Logo';
import LoginForm from '../../components/login-form/LoginForm';

export default function Login() {
  return (
    <ApolloConsumer>
      {client => (
        <>
          <StyledAuthorization>
            <Card width="350px">
              <Logo white size="35px" className="alpha" />
              <LoginForm client={client} />
            </Card>
            <span className="login_forgot_password">Recover Password</span>
          </StyledAuthorization>
        </>
      )}
    </ApolloConsumer>
  );
}
