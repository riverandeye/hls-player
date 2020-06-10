import styled from "styled-components/macro";
import { BREAKPOINT, THEME } from "../../constant";

export const Chatting = styled.div``;

export const ChattingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 40%;
    height: 40rem;
    padding-top: 1rem;

    margin-left: 2rem;
    border: 1px solid ${THEME.BORDER};
    border-radius: 1rem;
  }
`;

export const ChattingListContainer = styled.div`
  max-height: 25rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media only screen and (min-width: ${BREAKPOINT}px) {
    max-height: none;
    padding: 1rem;
  }
`;

export const ChattingMessageContainer = styled.div``;

export const ChattingMessage = styled.div`
  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 0.5rem;
    font-size: 1.4rem;
    font-weight: 500;
  }
`;

export const ChattingInputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    border-top: 1px solid ${THEME.PRIMARY};
    margin-top: 1rem;

    padding: 1rem;
  }
`;

export const ChattingInput = styled.input`
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 2.2rem;
    border: none;
    border-bottom: 1px solid black;
    margin-top: 0.5rem;
    padding: 0.5rem;

    outline-color: ${THEME.BORDER};
  }
`;

export const ChattingNameContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ChattingName = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const ChattingNameInput = styled.input`
  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 2.2rem;
    border: none;
    border-bottom: 1px solid black;

    outline-color: ${THEME.BORDER};
    padding: 0.5rem;
  }
`;

export const ChattingUserCount = styled.div`
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.4rem;
    font-weight: bold;
  }
`;
