import * as S from "./styles";

import React from "react";
import Header from "../header";

interface LayoutProps {
  children?: React.ReactNode;
  toggleModal: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, toggleModal }) => {
  return (
    <S.Layout>
      <Header toggleModal={toggleModal} />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
