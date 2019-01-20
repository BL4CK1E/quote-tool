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
      items: ['Dashboard', 'Proposals', 'Companies', 'Products', 'Templates', 'Settings'],
      active: 'Dashboard',
    };
    this.navigationChange = this.navigationChange.bind(this);
  }

  navigationChange(e) {
    e.stopPropagation();
    this.setState({
      active: e.target.innerText,
    });
  }

  renderNavBtns() {
    const { items, active } = this.state;
    return items.map((item, index) => {
      const isActive = (item === active);
      const isBottom = (item === 'Settings');
      return (
        <div key={`${item}-${index * 400}`}>
          <Link to={`/${item.toLowerCase()}/`}>
            <NavigationBtn
              onClick={this.navigationChange}
              name={item}
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
