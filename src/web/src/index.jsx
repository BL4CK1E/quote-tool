/* eslint-disable no-undef */

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Apollo Imports
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import resolvers from "./graphql/resolvers";
import defaults from "./graphql/defaults";
import typeDefs from "./graphql/typedefs";

// Front Awesome Imports
import FA from "./components/fontAwesome/FontAwesome";

// Component Imports
import App from "./App";
import * as serviceWorker from "./serviceWorker";

let API_URL = "";

switch (process.env.NODE_ENV) {
  case "production":
    // API_URL = "public_uri";
    API_URL = "localhost:3000";
    break;
  case "development":
    API_URL = "localhost:3000";
    break;
  default:
    API_URL = "localhost:3000";
}

// GraphQL Apolli Client Setup & Init
const GQL_URI = `http://${API_URL}/___gql`;

const client = new ApolloClient({
  uri: GQL_URI,
  credentials: "include",
  clientState: { defaults, resolvers, typeDefs }
});

// Font Awesome Init
FA();

ReactDOM.render(
  <ApolloProvider client={client}>
    <App client={client} />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
