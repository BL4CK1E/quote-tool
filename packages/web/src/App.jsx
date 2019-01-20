/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './layouts/main/main';
import Proposals from './pages/Proposals';

const client = new ApolloClient({
  uri: `http://${process.REACT_APP_API_URL}/___gql`,
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <MainLayout>
            <Route path="/proposals" component={Proposals} />
          </MainLayout>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
