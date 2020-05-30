import React from "react";

import * as S from "./styles";

class ModalProps {
  children?: React.ReactNode;
  show?: boolean = true;
  toggleModal?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  show,
  toggleModal,
}) => (
  <S.Modal show={show} onClick={toggleModal}>
    <S.Container onClick={(e) => e.stopPropagation()}>{children}</S.Container>
  </S.Modal>
);

export default Modal;
