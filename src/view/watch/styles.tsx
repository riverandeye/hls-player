import styled from "styled-components/macro";
import { BREAKPOINT } from "../../component/constant";

export const Watch = styled.div``;

export const WatchContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 3rem 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 8em;
  }
`;
