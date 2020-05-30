import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";

import * as S from "./styles";

interface VideoPlayerProps {
  src: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  const playerRef = useRef(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const newPlayer = videojs(playerRef.current, {
      controls: true,
      autoplay: true,
      muted: true,
      preload: "auto",
      html5: {
        hls: {
          enableLowInitialPlaylist: true,
          smoothQualityChange: true,
          overrideNative: true,
        },
      },
    });
    setPlayer(newPlayer);

    return () => {
      newPlayer.dispose();
    };
  }, []);

  useEffect(() => {
    if (player !== null) {
      player.src({ src });
    }
  }, [player, src]);

  return (
    <S.VideoPlayer data-vjs-player>
      <S.Player ref={playerRef} className="video-js" playsInline />
    </S.VideoPlayer>
  );
};

export default VideoPlayer;
