import React from "react";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Title>Free Live Streaming Platform</S.Title>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
