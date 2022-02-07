import { useSubscription, gql } from "@apollo/client";

// Styled components
import { MessagesWrapper, Message } from "./StyledMessages";

// GraphQL requests
const ALL_MESSAGES = gql`
  subscription allMessages {
    messages {
      id
      user
      content
    }
  }
`;

// Types
type Props = {
  user: string;
};

type Reply = {
  messages: {
    id: string;
    user: string;
    content: string;
  }[];
};

export const Messages = ({ user }: Props) => {
  const { data, error } = useSubscription<Reply>(ALL_MESSAGES);

  if (error) return <p>Oops, something went wrong {error.message}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <MessagesWrapper>
      {data.messages.map(({ id, user: messageUser, content }) => (
        <Message
          key={id}
          data-author={messageUser.slice(0, 2).toUpperCase()}
          currentUser={user === messageUser}
        >
          {content}
        </Message>
      ))}
    </MessagesWrapper>
  );
};
