import React, { useState, useRef } from "react";
import { withRouter } from "react-router";

const Chatroom = ({ match, socket }) => {
  const chatroomId = match.params.id;
  // state message chat room
  const [messages, setMessages] = useState([]);
  const messageRef = useRef();
  const [userId, setUserId] = useState("");
  const sendMessage = () => {
    if (socket) {
      socket.emit("chatroomMessage", {
        chatroomId,
        message: messageRef.current.value,
      });
      messageRef.current.value = "";
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUserId(payload.id);
    }
    if (socket) {
      socket.on("newMessage", (message) => {
        const newMessage = [...messages, message];
        setMessages(newMessage);
      });
    }
    // eslint disabled next line
  }, [messages]);

  React.useEffect(() => {
    if (socket) {
      socket.emit("joinRoom", {
        chatroomId,
      });
    }

    return () => {
      // component unmount
      if (socket) {
        socket.emit("leaveRoom", {
          chatroomId,
        });
      }
    };
    // esline disabled next line
  }, []);
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-5 max-w-min">
        <h1 className="text-center font-semibold text-2xl border-b pb-3">
          Form chatroom
        </h1>
        {/* wrap chat */}
        <div
          className="relative w-96"
          style={{ minHeight: "70vh", height: "70vh" }}
        >
          {/* wrap chat sub */}
          {messages.map((message, i) => (
            <ul className="mt-5" key={i}>
              <li>
                <div className="flex items-center">
                  <div className="flex">
                    <p
                      className={`w-28 ${
                        userId === messages.userId
                          ? "text-red-500"
                          : "text-blue-500"
                      }`}
                    >
                      {message.name}
                    </p>
                    <p>: &nbsp;</p>
                  </div>
                  <p>{message.message}</p>
                </div>
              </li>
            </ul>
          ))}
          <div className="absolute flex items-center bottom-0 left-0 right-0">
            <input
              type="text"
              name="message"
              placeholder="Say something!"
              className="border outline-none focus:outline-none py-2 px-4 text-sm w-full mr-4 py-3 rounded-lg"
              ref={messageRef}
            />

            <button
              className="py-2 px-4 text-semibold rounded-lg bg-green-400 text-white font-semibold focus:outline-none duration-200 outline-none hover:bg-green-300 text-base"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Chatroom);
