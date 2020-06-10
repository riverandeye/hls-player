import React from "react";

import * as S from "./styles";
import { useChatting } from "./hooks";
import Message from "../../common/model/message";

interface ChattingProps {
  streamerId: string;
}

const Chatting: React.FC<ChattingProps> = ({ streamerId }) => {
  const {
    user,
    message,
    messages,
    userCount,
    onSubmitMessage,
    handleChangeUser,
    handleChangeMessage,
  } = useChatting(streamerId);

  return (
    <S.ChattingContainer>
      <S.ChattingListContainer id={`scroll-${streamerId}`}>
        {messages.map((message: Message, idx) => (
          <S.ChattingMessage key={idx}>
            {message.name} : {message.message}
          </S.ChattingMessage>
        ))}
      </S.ChattingListContainer>
      <S.ChattingInputContainer>
        <S.ChattingUserCount>현재 인원 : {userCount}</S.ChattingUserCount>
        <S.ChattingNameContainer>
          <S.ChattingName>이름 : </S.ChattingName>
          <S.ChattingNameInput
            value={user}
            onChange={handleChangeUser}
          ></S.ChattingNameInput>
        </S.ChattingNameContainer>
        <S.ChattingInput
          value={message}
          onChange={handleChangeMessage}
          onKeyDown={onSubmitMessage}
          placeholder="메세지 입력하기..."
        ></S.ChattingInput>
      </S.ChattingInputContainer>
    </S.ChattingContainer>
  );
};

export default Chatting;
