import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  return (
    <Layout>
      <S.Main>
        <S.MainContainer>
          <S.Description>여러분들의 방송을 시작하세요!</S.Description>
          <S.InputContainer className="desktop">
            <S.InputDescription>방송 시작</S.InputDescription>
            <S.InputId placeholder="방송 아이디" />
            <S.SubmitButton>시작하기</S.SubmitButton>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputDescription>방송 청취</S.InputDescription>
            <S.InputId placeholder="스트리머 아이디" />
            <S.SubmitButton>방문하기</S.SubmitButton>
          </S.InputContainer>
        </S.MainContainer>
      </S.Main>
    </Layout>
  );
};

export default Main;
