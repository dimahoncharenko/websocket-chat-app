import styled from "@emotion/styled";

export const ChatContainer = styled.div`
  padding: 1em calc(50% - 450px);
`;

export const ChatInput = styled.input`
  border: 0;
  border-radius: 0.5em;
  padding: 0.5em;
  box-shadow: 0em 0em 0.1em slategray;
`;

export const ChatInputsRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 1em;
  padding: 1em 0em;

  > * {
    flex: 1;
  }
`;

export const ChatButtonSubmit = styled.button`
  background-color: #01bf71;
  padding: 0.3em 0.6em;
  color: white;
  border-radius: 0.3em;
  border: 0;
  font-weight: bolder;
  cursor: pointer;
`;
