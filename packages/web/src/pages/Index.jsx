/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MainLayout from '../layouts/main/main';

import Proposals from './Proposals';

const Index = () => (
  <Router>
    <MainLayout>
      <Route path="/proposals" component={Proposals} />
    </MainLayout>
  </Router>
);

export default Index;
