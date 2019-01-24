import gql from 'graphql-tag';

const LOGIN_USER = gql`
  mutation LoginUser($username: String!, $password: String!) {
    authoriseUser(username: $username, password: $password) {
      id
    }
  }
`;

export default LOGIN_USER;
