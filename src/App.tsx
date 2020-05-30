import React, { useState } from "react";

import VideoPlayer from "./component/video-player";

function App() {
  const [path, setPath] = useState("");
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input) {
      return;
    }
    setPath(input);
  };

  return (
    <div>
      <div
        style={{
          margin: "1rem",
          fontSize: "1.4rem",
        }}
      >
        주소를 입력해주세요 :
        <span
          style={{
            margin: "1rem",
          }}
        >
          <input onChange={(e) => setInput(e.target.value)} />
        </span>
        <span>
          <button onClick={handleSubmit}>입력</button>
        </span>
      </div>
      {path ? <VideoPlayer src={path} /> : null}
    </div>
  );
}

export default App;
