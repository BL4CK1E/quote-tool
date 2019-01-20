/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import NavigationWrapper from './styled';

class Navigation extends Component {
  render() {
    const { children } = this.props;
    return (
      <NavigationWrapper>
        { children }
      </NavigationWrapper>
    );
  }
}

export default Navigation;
