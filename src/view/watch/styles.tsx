import styled from "styled-components/macro";
import { BREAKPOINT, THEME } from "../../constant";

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
  margin-bottom: 2rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 60%;
    margin-bottom: 0rem;
  }
`;
