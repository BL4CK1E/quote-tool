/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-blocks */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { getCurrentUser } from '../../graphql';

import HeaderAccountWrapper from '../header-account-wrapper/HeaderAccountWrapper';
import HeaderAccountImage from '../header-account-img/HeaderAccountImg';
import SubMenuCollapseBtn from '../collapse-btn/SubMenuCollapseBtn';
import HeaderAccountSubMenu from '../header-account-submenu/HeaderAccountSubMenu';
import LogoutBtn from '../logout-btn/LogoutBtn';

import StyledHeader from './styled';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapsed: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(){
    const { isCollapsed } = this.state;
    this.setState({
      isCollapsed: !isCollapsed,
    });
  }

  render() {
    const { isCollapsed } = this.state;
    const { client } = this.props;
    return (
      <Query query={getCurrentUser}>
        {data => (<StyledHeader>
          <HeaderAccountWrapper>
            <HeaderAccountImage name="test" />
            <SubMenuCollapseBtn onClick={this.handleToggle} isCollapsed={isCollapsed} />
            <HeaderAccountSubMenu isCollapsed={isCollapsed}>
              <LogoutBtn client={client} />
            </HeaderAccountSubMenu>
          </HeaderAccountWrapper>
        </StyledHeader>
        )}
      </Query>
    );
  }
}

export default Header;
