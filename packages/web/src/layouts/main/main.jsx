/* eslint-disable no-undef */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';

import { StyledMainLayout, StyledMainLayoutContent } from './styled';

import Navigation from '../../components/navigation/Navigation';
import NavigationLogo from '../../components/navigation-logo/NavigationLogo';
import NavigationBtn from '../../components/navigation-btn/NavigationBtn';
import Header from '../../components/header/Header';
import CollapseBtn from '../../components/collapse-btn/CollapseBtn';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        name: 'Dashboard',
        path: '/',
        icon: 'home',
      }, {
        name: 'Proposals',
        path: '/proposals',
        icon: 'paper-plane',
      }, {
        name: 'Companies',
        path: '/companies',
        icon: 'building',
      }, {
        name: 'Products',
        path: '/products',
        icon: 'box',
      }, {
        name: 'Templates',
        path: '/templates',
        icon: 'file',
      }, {
        name: 'Settings',
        path: '/settings',
        icon: 'cog',
      }],
      isCollapsed: false,
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidMount() {
    const SAVED_STATE = (localStorage.getItem('nav_isCollapsed') === 'true');
    this.setState({
      isCollapsed: SAVED_STATE,
    });
  }


  toggleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed,
    });
    window.localStorage.setItem('nav_isCollapsed', !isCollapsed);
  }

  renderNavBtns() {
    const { items, isCollapsed } = this.state;
    const { pathname } = window.location;
    return items.map((item, index) => {
      const isActive = (item.path === pathname);
      const isBottom = (item.name === 'Settings');
      return (
        <div key={`${item}-${index * 400}`}>
          <Link to={item.path}>
            <NavigationBtn
              name={item.name}
              icon={item.icon}
              active={isActive}
              bottom={isBottom}
              isCollapsed={isCollapsed}
            />
          </Link>
        </div>
      );
    });
  }

  render() {
    const { children } = this.props;
    const { isCollapsed } = this.state;
    return (
      <ApolloConsumer>
        {client => (
          <StyledMainLayout isCollapsed={isCollapsed}>
            <Navigation isCollapsed={isCollapsed}>
              <NavigationLogo isCollapsed={isCollapsed} />
              <CollapseBtn onClick={this.toggleCollapse} isCollapsed={isCollapsed} />
              { this.renderNavBtns() }
            </Navigation>
            <Header client={client} />
            <StyledMainLayoutContent>{ children }</StyledMainLayoutContent>
          </StyledMainLayout>
        )}
      </ApolloConsumer>
    );
  }
}

export default MainLayout;
