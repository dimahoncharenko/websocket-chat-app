import styled from "@emotion/styled";

export const MessagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3em;
  padding: 3em;
`;

export const Message = styled.div<{
  currentUser: boolean;
}>`
  align-self: ${({ currentUser }) => (currentUser ? "flex-end" : "flex-start")};
  background-color: ${({ currentUser }) =>
    currentUser ? "#01bf71" : "slategray"};
  color: ${({ currentUser }) => (currentUser ? "white" : "black")};
  padding: 0.5em 1em;
  min-width: 100px;
  text-align: center;
  border-radius: 0.5em;
  position: relative;

  &::before {
    display: ${({ currentUser }) => (currentUser ? "none" : "block")};
    position: absolute;
    content: attr(data-author);
    padding: 0.5em;
    color: white;
    left: -2.5em;
    top: 0;
    background-color: gray;
    border-radius: 50%;
  }
`;
