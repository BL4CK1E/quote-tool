/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { StyledMainLayout, StyledMainLayoutContent } from './styled';

import Logo from './logo.PNG';

import Navigation from '../../components/navigation/Navigation';
import NavigationLogo from '../../components/navigation-logo/NavigationLogo';
import NavigationBtn from '../../components/navigation-btn/NavigationBtn';
import Header from '../../components/header/Header';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        name: 'Dashboard',
        path: '/',
      }, {
        name: 'Proposals',
        path: '/proposals',
      }, {
        name: 'Companies',
        path: '/companies',
      }, {
        name: 'Products',
        path: '/products',
      }, {
        name: 'Templates',
        path: '/templates',
      }, {
        name: 'Settings',
        path: '/settings',
      }],
    };
  }

  renderNavBtns() {
    const { items } = this.state;
    const { pathname } = window.location;
    return items.map((item, index) => {
      const isActive = (item.path === pathname);
      const isBottom = (item.name === 'Settings');
      return (
        <div key={`${item}-${index * 400}`}>
          <Link to={item.path}>
            <NavigationBtn
              name={item.name}
              active={isActive}
              bottom={isBottom}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    const { children } = this.props;
    return (
      <StyledMainLayout>
        <Navigation>
          <NavigationLogo img={Logo} />
          { this.renderNavBtns() }
        </Navigation>
        <Header> . </Header>
        <StyledMainLayoutContent>{ children }</StyledMainLayoutContent>
      </StyledMainLayout>
    );
  }
}

export default MainLayout;
