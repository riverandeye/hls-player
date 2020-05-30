import React from "react";
import ShakaPlayerReact from "shaka-player-react";

const ShakaPlayer = () => {
  return (
    <ShakaPlayerReact autoPlay src="http://49.50.175.17/hls/stream.m3u8" />
  );
};

export default ShakaPlayer;
