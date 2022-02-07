import { GraphQLServer, PubSub } from "graphql-yoga";
import resolvers from "./graphql/resolvers";
import { readFileSync } from "fs";

// GraphqQL Schema
const typeDefs = readFileSync("./graphql/typeDefs.graphql", "utf-8");

// Handle Subscription support
const pubsub = new PubSub();

// Types
export type GraphQLContext = {
  pubsub: PubSub;
};

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

server.start(({ port }) =>
  console.log(`Server ready at http://localhost:${port}`)
);
