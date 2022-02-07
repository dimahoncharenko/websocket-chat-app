import { useState, ChangeEvent } from "react";
import { useMutation, gql } from "@apollo/client";

// Styled components
import {
  ChatContainer,
  ChatInput,
  ChatInputsRow,
  ChatButtonSubmit,
} from "./StyledChat";

// Components
import { Messages } from "../Messages";

// GraphQL requests
const POST_MESSAGE = gql`
  mutation postMessage($input: PostMessageArgs!) {
    postMessage(input: $input)
  }
`;

// Types
type State = {
  user: string;
  content: string;
};

export const Chat = () => {
  const [postMessage] = useMutation(POST_MESSAGE);

  const [state, setState] = useState<State>({
    user: "Dima",
    content: "",
  });

  const handleChange = ({
    target: { value, name },
  }: ChangeEvent<HTMLInputElement>) => {
    setState((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (!state.content.trim()) return;

    postMessage({
      variables: {
        input: state,
      },
    });
  };

  return (
    <ChatContainer>
      <Messages user={state.user} />
      <ChatInputsRow>
        <ChatInput
          style={{ maxWidth: "50px" }}
          name="user"
          value={state.user}
          onChange={handleChange}
        />
        <ChatInput
          style={{ maxWidth: "200px" }}
          name="content"
          value={state.content}
          onChange={handleChange}
        />
        <ChatButtonSubmit style={{ maxWidth: "100px" }} onClick={handleSubmit}>
          Відправити
        </ChatButtonSubmit>
      </ChatInputsRow>
    </ChatContainer>
  );
};
