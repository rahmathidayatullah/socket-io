import React from "react";
import { withRouter } from "react-router";
import io from "socket.io-client";

const Chatroom = ({ match, socket }) => {
  const chatroomId = match.params.id;
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
          <ul className="mt-5">
            <li>
              <div className="flex items-center">
                <div className="flex">
                  <p className="w-28">Prili</p>
                  <p>: &nbsp;</p>
                </div>
                <p>Hallo </p>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <div className="flex">
                  <p className="w-28">Rahmat</p>
                  <p>: &nbsp;</p>
                </div>
                <p>Hello to</p>
              </div>
            </li>
          </ul>
          <div className="absolute flex items-center bottom-0 left-0 right-0">
            <input
              type="text"
              name="message"
              placeholder="Say something!"
              className="border outline-none focus:outline-none py-2 px-4 text-sm w-full mr-4 py-3 rounded-lg"
            />

            <button className="py-2 px-4 text-semibold rounded-lg bg-green-400 text-white font-semibold focus:outline-none duration-200 outline-none hover:bg-green-300 text-base">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Chatroom);
