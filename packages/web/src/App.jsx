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
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';


import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faPaperPlane,
  faBuilding,
  faBox,
  faFile,
  faCog,
  faCaretSquareLeft,
  faCaretSquareRight,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import defaults from './defaults/defaults';

import './App.css';

import MainLayout from './layouts/main/main';
import Login from './layouts/login/Login';
import Loader from './components/loader/Loader';

const Dashboard = () => <>Dashboard</>;
const Proposals = () => <>Proposals</>;
const Products = () => <>Products</>;
const Templates = () => <>Templates</>;
const Companies = () => <>Companies</>;
const Settings = () => <>Settings</>;
const Recover = () => <>Recover</>;

library.add(faHome, faPaperPlane, faBuilding, faBox, faFile, faCog, faCaretSquareLeft, faCaretSquareRight, faChevronDown, faChevronUp);

const GQL_URI = `http://${process.env.REACT_APP_API_URL}/___gql`;

const cache = new InMemoryCache();

const stateLink = withClientState({
  cache,
});

const link = createHttpLink({
  uri: GQL_URI,
  credentials: 'include',
  stateLink,
});

const client = new ApolloClient({
  link,
  cache,
  defaults,
  uri: GQL_URI,
});

const GET_USER = gql`
  query {
    findUser {
      id
      username
      email
      firstName
      lastName
      auth
      status
    }
  }
`;

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authorised: true,
      loading: true,
      user: null,
      err: null,
    };
  }

  async componentDidMount() {
    client.query({ query: GET_USER })
      .then((res) => {
        const { findUser } = res.data;
        this.updateAuthorization(true, false, findUser, null);
      })
      .catch((err) => {
        this.updateAuthorization(false, false, null, err);
      });
  }

  updateAuthorization(authorised, loading, data, err) {
    this.setState({
      authorised, loading, data, err,
    });
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
