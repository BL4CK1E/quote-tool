/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from './layouts/main/main';

const Dashboard = () => <h1>Dashboard</h1>;
const Proposals = () => <h1>Proposals</h1>;
const Products = () => <h1>Products</h1>;
const Templates = () => <h1>Templates</h1>;
const Companies = () => <h1>Companies</h1>;
const Settings = () => <h1>Settings</h1>;

const Login = () => <h1>Login</h1>;
const Recover = () => <h1>Recover</h1>;

const client = new ApolloClient({
  uri: `http://${process.REACT_APP_API_URL}/___gql`,
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorised: true,
    };
  }

  render() {
    const { authorised } = this.state;
    return (
      <ApolloProvider client={client}>
        <Router>
          <>
            { authorised ? (
              <MainLayout>
                <Route exact path="/" component={Dashboard} />
                <Route path="/proposals" component={Proposals} />
                <Route path="/products" component={Products} />
                <Route path="/companies" component={Companies} />
                <Route path="/templates" component={Templates} />
                <Route path="/settings" component={Settings} />
              </MainLayout>) : (
                <>
                  <Route exact path="/" component={Login} />
                  <Route path="/recover" component={Recover} />
                </>
            )}
          </>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
