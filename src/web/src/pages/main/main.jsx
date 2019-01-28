/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ApolloConsumer } from 'react-apollo';
import { StyledMainLayout, StyledMainLayoutContent } from './styled';

import Navigation from '../../components/navigation/Navigation';
import Logo from '../../components/logo/Logo';
import NavigationBtn from '../../components/navigation/navigation-btn/NavigationBtn';
import Header from '../../components/header/Header';
import CollapseBtn from '../../components/collapse-btn/CollapseBtn';

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          name: 'Dashboard',
          path: '/',
          icon: 'home'
        },
        {
          name: 'Proposals',
          path: '/proposals',
          icon: 'paper-plane'
        },
        {
          name: 'Companies',
          path: '/companies',
          icon: 'building'
        },
        {
          name: 'Products',
          path: '/products',
          icon: 'box'
        },
        {
          name: 'Templates',
          path: '/templates',
          icon: 'file'
        },
        {
          name: 'Settings',
          path: '/settings',
          icon: 'cog'
        }
      ]
    };

    this.toggleCollapse = this.toggleCollapse.bind(this);
  }

  componentDidMount() {
    const SAVED_STATE = localStorage.getItem('nav_isCollapsed') === 'true';
    this.setState({
      isCollapsed: SAVED_STATE
    });
  }

  toggleCollapse() {
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed
    });
    window.localStorage.setItem('nav_isCollapsed', !isCollapsed);
  }

  renderNavBtns() {
    const { items, isCollapsed } = this.state;
    return items.map((item, index) => {
      const currentPath = window.location.pathname.split('/').splice(1, 1);
      const isActive = item.path === `/${currentPath}`;
      const isBottom = item.name === 'Settings';
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
              <Logo size="16px" isCollapsed={isCollapsed} />
              <CollapseBtn
                onClick={this.toggleCollapse}
                isCollapsed={isCollapsed}
              />
              {this.renderNavBtns()}
            </Navigation>
            <Header client={client} />
            <StyledMainLayoutContent>{children}</StyledMainLayoutContent>
          </StyledMainLayout>
        )}
      </ApolloConsumer>
    );
  }
}

// Prop Types
MainLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default MainLayout;
