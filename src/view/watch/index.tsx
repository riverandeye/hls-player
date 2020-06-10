import React from "react";
import { RouteComponentProps } from "react-router-dom";

import * as S from "./styles";
import Layout from "../../component/layout";
import { useWatch } from "./hooks";
import VideoPlayer from "../../component/video-player";
import Chatting from "../../container/chatting";

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
          <Chatting streamerId={match.params.streamerId} />
        </S.WatchContainer>
      </S.Watch>
    </Layout>
  );
};

export default Watch;
