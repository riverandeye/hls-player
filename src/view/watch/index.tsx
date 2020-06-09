import React from "react";
import { RouteComponentProps } from "react-router-dom";

import * as S from "./styles";
import Layout from "../../component/layout";
import { useWatch } from "./hooks";
import VideoPlayer from "../../component/video-player";

interface MatchParams {
  streamerId: string;
}

const Watch: React.FC<RouteComponentProps<MatchParams>> = ({ match }) => {
  const { videoSrc } = useWatch(match.params.streamerId);

  return (
    <Layout>
      <S.Watch>
        <S.WatchContainer>
          <S.VideoWrapper>
            {videoSrc ? <VideoPlayer src={videoSrc} /> : ""}
          </S.VideoWrapper>
          <S.ChattingContainer>
            <S.ChattingListContainer>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
              <S.ChattingMessage>관훈 : 안안녕</S.ChattingMessage>
            </S.ChattingListContainer>
            <S.ChattingInputContainer>
              <S.ChattingInput placeholder="메세지 입력하기..."></S.ChattingInput>
            </S.ChattingInputContainer>
          </S.ChattingContainer>
        </S.WatchContainer>
      </S.Watch>
    </Layout>
  );
};

export default Watch;
