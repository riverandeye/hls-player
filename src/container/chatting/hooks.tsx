import { useState, useEffect } from "react";
import Message from "../../common/model/message";

import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:4000/";

export const useChatting = (streamerId: string) => {
  const [user, setUser] = useState("");
  const [message, setMessage] = useState("");
  const [userCount, setUserCount] = useState(1);
  const [messages, setMessages] = useState([] as Message[]);
  const [socket, setSocket] = useState<SocketIOClient.Socket>(null);

  const scrollDown = (): void => {
    const target = document.getElementById(`scroll-${streamerId}`);
    console.log(target);
    target.scrollTop = target.scrollHeight;
  };

  useEffect(() => {
    if (!socket) {
      const socketClient = socketIOClient(ENDPOINT);

      setSocket(socketClient);
      return;
    }
  }, [socket, messages, userCount]);

  useEffect(() => {
    if (!socket) {
      return;
    }

    if (socket.hasListeners("chat")) {
      socket.removeListener("chat"); // should remove event listener
    }

    if (socket.hasListeners("enter")) {
      socket.removeListener("enter");
    }

    if (socket.hasListeners("leave")) {
      socket.removeListener("leave");
    }

    socket.on("chat", (msg: string) => {
      const messageFromServer: Message = JSON.parse(msg);
      setMessages([...messages, messageFromServer]);
    });

    socket.on("enter", (msg: string) => {
      setUserCount(userCount + 1);
    });

    socket.on("leave", (msg: string) => {
      setUserCount(userCount - 1);
    });

    scrollDown();
  }, [socket, userCount, messages]);

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const onSubmitMessage = (e) => {
    if (e.which !== 13) {
      return;
    }

    if (!message) {
      return;
    }

    if (!user) {
      alert("사용자 이름을 지정해 주세요 :)");
      return;
    }

    const messageFormat = new Message(streamerId, user, message);

    socket.send(JSON.stringify(messageFormat));
    setMessage("");
    setMessages([...messages, messageFormat]);
  };

  return {
    user,
    message,
    messages,
    userCount,
    onSubmitMessage,
    handleChangeUser,
    handleChangeMessage,
  };
};
