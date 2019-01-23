/* eslint-disable react/prop-types */
/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GET_CURRENT_USER } from './graphql/user';
import './App.css';

import Loader from './components/loader/Loader';
import IndexRoute from './pages/indexRoute';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: true,
      loading: true,
      user: null,
      err: null
    };
  }

  componentDidMount() {
    const { client } = this.props;
    client
      .query({ query: GET_CURRENT_USER })
      .then(res => {
        const { findUser } = res.data;
        this.updateAuthorization(true, false, findUser, null);
      })
      .catch(err => {
        this.updateAuthorization(false, false, null, err);
      });
  }

  updateAuthorization(isAuthenticated, loading, data, err) {
    this.setState({
      isAuthenticated,
      loading,
      data,
      err
    });
  }

  render() {
    const { isAuthenticated, loading } = this.state;
    return (
      <Router>
        {loading ? (
          <Loader noParent />
        ) : (
          <>
            <IndexRoute isAuthenticated={isAuthenticated} />
          </>
        )}
      </Router>
    );
  }
}

export default App;
