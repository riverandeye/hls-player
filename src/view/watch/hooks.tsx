import React, { useEffect, useState } from "react";

export const useWatch = (streamerId: string) => {
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    const checkBroadcasting = async () => {
      const hlsPath = `${process.env.REACT_APP_HLS_SERVER}/${process.env.REACT_APP_HLS_PATH}/${streamerId}.m3u8`;

      const response = await fetch(hlsPath);
      if (!response.ok) {
        window.location.href = "/";
        return;
      }

      setVideoSrc(hlsPath);
    };

    checkBroadcasting();
  }, [streamerId]);

  return {
    videoSrc,
  };
};
