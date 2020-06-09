import React from "react";

import * as S from "./styles";
import Layout from "../../component/layout";

interface StreamProps {}

const Stream: React.FC<StreamProps> = () => {
  return (
    <Layout>
      <S.Stream>
        <S.StreamContainer></S.StreamContainer>
      </S.Stream>
    </Layout>
  );
};

export default Stream;
