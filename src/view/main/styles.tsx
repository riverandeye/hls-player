import styled from "styled-components/macro";
import { BREAKPOINT, THEME } from "../../component/constant";

export const Main = styled.div``;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 3rem 1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding: 8em;
  }
`;

export const Description = styled.div`
  font-size: 2rem;
  margin-bottom: 2rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-weight: 600;
  }
`;

export const StartProject = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  width: 100%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    max-width: 45rem;
  }

  &.desktop {
    display: none;

    @media only screen and (min-width: ${BREAKPOINT}px) {
      display: flex;
    }
  }
`;

export const InputDescription = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const InputId = styled.input`
  border: 1px solid ${THEME.BORDER};

  height: 3rem;
  padding: 0.5rem;
  font-size: 1.5rem;

  border-radius: 0.3rem;
  margin: 0rem 2rem;
  width: 15rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 20rem;
  }
`;

export const SubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${THEME.BORDER};
  outline: none;
  padding: 0.5rem;
  border-radius: 0.3rem;

  font-size: 1.4rem;
  font-weight: bold;
`;
