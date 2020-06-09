import styled from "styled-components/macro";
import { BREAKPOINT } from "../../constant";

export const Stream = styled.div``;

export const StreamContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 3rem 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 8em;
  }
`;
