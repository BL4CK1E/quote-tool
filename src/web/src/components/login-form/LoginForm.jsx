/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable padded-blocks */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import gql from 'graphql-tag';

import StyledLoginForm from './styled';
import Label from '../label/Label';
import Input from '../input/Input';
import Button from '../button/Button';

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    authoriseUser(username: $username, password: $password) {
      id
    }
  }
`;

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      username: 'ctalke',
      password: 'thisisapassword',
      error: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleLogin(e) {
    e.preventDefault();
    const { client } = this.props;
    const { username, password } = this.state;
    client.mutate({ mutation: LOGIN_USER, variables: { username, password } })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { username, password } = this.state;
    return (
      <StyledLoginForm id="login-form" onSubmit={this.handleLogin}>
        <Label value="Username" targetField="username" isRequired />
        <Input type="text" onChange={this.handleInput} value={username} name="username" id="username" />
        <Label value="Password" targetField="username" isRequired />
        <Input type="password" onChange={this.handleInput} value={password} name="password" id="password" />
        <Button primary center width="200px" name="login-button" type="submit" form="login-form" value="Log in" />
      </StyledLoginForm>
    );
  }
}

export default LoginForm;
