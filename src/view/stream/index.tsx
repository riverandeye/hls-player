import React from "react";

import * as S from "./styles";

interface StreamProps {}

const Stream: React.FC<StreamProps> = () => {
  return (
    <S.Stream>
      <S.StreamContainer></S.StreamContainer>
    </S.Stream>
  );
};

export default Stream;
