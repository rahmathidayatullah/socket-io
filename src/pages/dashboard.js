import React from "react";

export default function Dashboard(props) {
  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    if (!token) {
      props.history.push("/login");
    } else {
      props.history.push("/dashboard");
    }
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
          <li className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-base">Happy newbie</p>
              <button className="py-2 px-4 bg-green-400 hover:bg-green-300 duration-200 focus:outline-none outline-none text-white font-semibold rounded-md">
                Join
              </button>
            </div>
          </li>
          <li className="mt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-base">Happy newbie</p>
              <button className="py-2 px-4 bg-green-400 hover:bg-green-300 duration-200 focus:outline-none outline-none text-white font-semibold rounded-md">
                Join
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
