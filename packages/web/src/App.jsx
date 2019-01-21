/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { ApolloClient } from 'apollo-boost';
import gql from 'graphql-tag';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome, faPaperPlane, faBuilding, faBox, faFile, faCog, faCaretSquareLeft, faCaretSquareRight,
} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import MainLayout from './layouts/main/main';
import Login from './layouts/login/Login';
import Loader from './components/loader/Loader';

const Dashboard = () => <h1>Dashboard</h1>;
const Proposals = () => <h1>Proposals</h1>;
const Products = () => <h1>Products</h1>;
const Templates = () => <h1>Templates</h1>;
const Companies = () => <h1>Companies</h1>;
const Settings = () => <h1>Settings</h1>;
const Recover = () => <h1>Recover</h1>;

// eslint-disable-next-line max-len
library.add(faHome, faPaperPlane, faBuilding, faBox, faFile, faCog, faCaretSquareLeft, faCaretSquareRight);

const GQL_URI = `http://${process.env.REACT_APP_API_URL}/___gql`;

const link = createHttpLink({
  uri: GQL_URI,
  credentials: 'include',
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  uri: GQL_URI,
});

const GET_USER = gql`
  query {
    Proposals {
      name
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorised: true,
      loading: true,
      err: null,
    };
  }

  async componentDidMount() {
    client.query({ query: GET_USER })
      .then((data) => {
        console.log(data);
        this.updateAuthorization(true, false);
      })
      .catch((err) => {
        this.updateAuthorization(false, false, err);
      });
  }

  updateAuthorization(authorised, loading, err) {
    this.setState({ authorised, loading, err });
  }

  render() {
    const { authorised, loading } = this.state;
    return (
      <ApolloProvider client={client}>
        <Router>
          {/* If Loading */}
          { (loading ? (<Loader />) : (
            // If Authorised, Render Web App
            (authorised ? (
              <MainLayout>
                <Route exact path="/" component={Dashboard} />
                <Route path="/proposals" component={Proposals} />
                <Route path="/products" component={Products} />
                <Route path="/companies" component={Companies} />
                <Route path="/templates" component={Templates} />
                <Route path="/settings" component={Settings} />
              </MainLayout>
            ) : ( // If Unauthorised, Render Login or Recovery Screens
                  <>
                    <Route exact path="/" component={Login} />
                    <Route path="/recover" component={Recover} />
                  </>
            ))
          )) }
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
