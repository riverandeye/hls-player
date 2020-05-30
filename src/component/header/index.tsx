import React from "react";

import * as S from "./styles";

interface HeaderProps {
  toggleModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleModal }) => {
  return (
    <S.Header>
      <S.HeaderContainer></S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
