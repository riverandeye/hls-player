import React, { useState } from "react";

export const useMain = () => {
  const [myId, setMyId] = useState("");
  const [streamerId, setStreamerId] = useState("");

  const handleUpdateIdChange = (e) => {
    setMyId(e.target.value);
  };

  const handleStreamIdChange = (e) => {
    setStreamerId(e.target.value);
  };

  const onClickVisit = () => {
    const checkBroadcasting = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_HLS_SERVER}/${process.env.REACT_APP_HLS_PATH}/${streamerId}.m3u8`
      );

      if (!response.ok) {
        alert("현재 스트리밍 중이 아닙니다.");
        return;
      }

      window.location.href = `watch/${streamerId}`;
    };

    checkBroadcasting();
  };

  return {
    myId,
    streamerId,
    onClickVisit,
    handleUpdateIdChange,
    handleStreamIdChange,
  };
};
