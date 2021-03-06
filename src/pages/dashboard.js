import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard(props) {
  const [chatrooms, setChatrooms] = React.useState([]);

  const getChatrooms = () => {
    axios
      .get("https://server-chat-socket-io.herokuapp.com/api/chatroom", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("CC_Token"),
        },
      })
      .then((response) => {
        setChatrooms(response.data);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };

  useEffect(() => {
    getChatrooms();
  }, []);
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-5 max-w-min">
        <h1 className="text-center font-semibold text-2xl border-b pb-3">
          Chatroom group
        </h1>
        <p className="mt-5">Chatroom name</p>
        <input
          type="text"
          name="chatroomName"
          id="chatroomName"
          placeholder="Chatbox group"
          className="border rounded-lg p-4 text-sm w-96 focus:outline-none text-gray-700 mt-2"
        />
        <button className="p-2 text-semibold w-full rounded-lg bg-green-400 text-white font-semibold focus:outline-none duration-200 outline-none hover:bg-green-300 mt-5 text-lg">
          Create chat room
        </button>
        <ul>
          {chatrooms.data &&
            chatrooms.data.map((chatroom) => (
              <li className="mt-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-base">
                    {chatroom.name}
                  </p>
                  <Link to={"/chatroom/" + chatroom._id}>
                    <button className="py-2 px-4 bg-green-400 hover:bg-green-300 duration-200 focus:outline-none outline-none text-white font-semibold rounded-md">
                      Join
                    </button>
                  </Link>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
