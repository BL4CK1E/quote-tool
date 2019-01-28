import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

// Page Routes
import MainLayout from './main/main';
import Dashboard from './main/dashboard/dashboard';
import Proposals from './main/proposals/proposals';
import Login from './login/Login';

// 404 Route
import NoMatch from '../components/noMatch/noMatch';

// Mock Routes
const Products = () => <>Products</>;
const Templates = () => <>Templates</>;
const Companies = () => <>Companies</>;
const Settings = () => <>Settings</>;
const Recover = () => <>Recover</>;

const IndexRoute = ({ isAuthenticated }) =>
  isAuthenticated ? (
    <MainLayout>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/proposals" component={Proposals} />
        <Route path="/products" component={Products} />
        <Route path="/companies" component={Companies} />
        <Route path="/templates" component={Templates} />
        <Route path="/settings" component={Settings} />
        <Route component={NoMatch} />
      </Switch>
    </MainLayout>
  ) : (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/recover" component={Recover} />
      <Route component={NoMatch} />
    </Switch>
  );

export default IndexRoute;

IndexRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
};
