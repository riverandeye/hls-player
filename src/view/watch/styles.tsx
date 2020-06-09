import styled from "styled-components/macro";
import { BREAKPOINT, THEME } from "../../component/constant";

export const Watch = styled.div``;

export const WatchContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  padding: 3rem 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 6em;
    flex-wrap: nowrap;
  }
`;

export const VideoWrapper = styled.div`
  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 60%;
  }
`;

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
  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 1rem;
    overflow: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
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

    outline-color: ${THEME.BORDER};
  }
`;
