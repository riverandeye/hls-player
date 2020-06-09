import styled from "styled-components/macro";
import { THEME, BREAKPOINT } from "../../constant";

export const Header = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderContainer = styled.div`
  height: 5.3rem;
  border-bottom: 1px solid ${THEME.BORDER};
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0rem 2rem;
`;

export const Title = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;

export const StartButton = styled.button`
  display: none;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: block;

    font-size: 1.4rem;
    font-weight: bold;
    padding: 0.5rem;
    background-color: ${THEME.PRIMARY};

    border: none;
    outline: none;
    border-radius: 0.5rem;
  }
`;
