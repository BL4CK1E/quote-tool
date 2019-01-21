/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-console */

import React, { Component } from 'react';
import gql from 'graphql-tag';

import HeaderAccountSubMenuBtn from '../header-account-submenu-btn/HeaderAccountSubMenuBtn';

const LOGOUT_USER = gql`
  mutation LogoutUser {
    deauthoriseUser {
      id
    }
  }
`;

class LogoutBtn extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    const { client } = this.props;
    client.mutate({ mutation: LOGOUT_USER })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <HeaderAccountSubMenuBtn type="button" value="Log Out" onClick={this.handleLogout} />
    );
  }
}

export default LogoutBtn;
