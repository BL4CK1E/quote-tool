/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { Query } from 'react-apollo';

import StyledDashboard from './styled';
import Card from '../../../components/card/Card';
import Logo from '../../../components/logo/Logo';
import { GET_CURRENT_USER } from '../../../graphql/user';

class Dashboard extends Component {
  render() {
    return (
      <StyledDashboard>
        <Query query={GET_CURRENT_USER}>
          {({ data }) => {
            const user = data.findUser;
            return (
              <Card padding="100px 0">
                <h2>Hi {user.firstName}, Welcome To</h2>
                <Logo white size="50px" className="alpha" />
              </Card>
            );
          }}
        </Query>
      </StyledDashboard>
    );
  }
}

export default Dashboard;
