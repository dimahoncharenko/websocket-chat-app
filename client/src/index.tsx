import { render } from "react-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

import { WebSocketLink } from "@apollo/client/link/ws";

// Global styles
import "./index.css";

// Components
import App from "./App";

// Set up graphql client
const client = new ApolloClient({
  uri: "http://localhost:4000/",
  link: new WebSocketLink({
    uri: "ws://localhost:4000/",
  }),
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
