import { GraphQLContext } from "../server";

// Storage of messages
const messages: GQL.IMessage[] = [];

// Handle subscribers
type SubscribeCallback = () => void;
const subscribers: SubscribeCallback[] = [];

const addSubscriber = (fn: SubscribeCallback) => {
  subscribers.push(fn);
};

// Resolvers
export default {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (
      _: unknown,
      { input }: GQL.IPostMessageOnMutationArguments
    ) => {
      const id = `${messages.length}`;

      subscribers.forEach((fn) => fn());

      messages.push({
        id,
        user: input.user,
        content: input.content,
      });

      return id;
    },
  },
  Subscription: {
    messages: {
      subscribe: (_: unknown, __: unknown, { pubsub }: GraphQLContext) => {
        // Create unique channel of a new subscriber
        const channel = Math.random().toString(36).slice(2);
        addSubscriber(() => pubsub.publish(channel, { messages }));

        // Publish all messages to a new subscriber next tick
        setTimeout(() => pubsub.publish(channel, { messages }), 0);
        return pubsub.asyncIterator(channel);
      },
    },
  },
};
