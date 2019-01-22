import React from 'react';
import { ApolloConsumer } from 'react-apollo';

import StyledAuthorization from './styled';

import Card from '../../components/card/Card';
import Logo from '../../components/logo/Logo';
import LoginForm from '../../components/login-form/LoginForm';

export default function Login() {
  return (
    <StyledAuthorization>
      <Card width="350px">
        <Logo white size="35px" />
        <ApolloConsumer>
          {client => (
            <LoginForm client={client} />
          )}
        </ApolloConsumer>
      </Card>
    </StyledAuthorization>
  );
}
