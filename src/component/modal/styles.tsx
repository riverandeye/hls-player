import styled from "styled-components";

interface ModalProps {
  show?: boolean;
  toggleModalShow?: () => void;
}

export const Modal = styled.div<ModalProps>`
  display: ${(props) => (props.show ? "flex" : "none")};
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border: none;
  border-radius: 0.5rem;
`;
