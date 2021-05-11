import React from "react";
import axios from "axios";
import makeToast from "Toaster";
import { withRouter } from "react-router";

const Login = (props) => {
  const emailRef = React.createRef();
  const passwordRef = React.createRef();

  const loginUser = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    //   interaksi api register user

    axios
      .post("https://server-chat-socket-io.herokuapp.com/api/login", {
        //   get from up variable in ref
        email,
        password,
      })
      //   if get response get it
      .then((response) => {
        if (response.data.token) {
          makeToast("success", response.data.message);
          localStorage.setItem("CC_Token", response.data.token);
          props.history.push("/dashboard");
          props.setupSocket();
        } else {
          makeToast("error", response.data.message);
        }
      })
      //   if get response error server
      .catch((err) => {
        console.log("error server", err);
      });
  };
  return (
    <div className="bg-gray-200 h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-2xl p-5 max-w-min">
        <h1 className="text-center font-semibold text-2xl border-b pb-3">
          Form login
        </h1>
        <p className="mt-5">Email</p>
        <input
          type="email"
          name="email"
          id="email"
          ref={emailRef}
          placeholder="Masukan alamat email anda"
          className="border rounded-lg p-4 text-sm w-96 focus:outline-none text-gray-700 mt-2"
        />
        <p className="mt-5">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          ref={passwordRef}
          placeholder="Masukan password anda"
          className="border rounded-lg p-4 text-sm w-96 focus:outline-none text-gray-700 mt-2"
        />
        <button
          onClick={loginUser}
          className="p-2 text-semibold w-full rounded-lg bg-green-400 text-white font-semibold focus:outline-none duration-200 outline-none hover:bg-green-300 mt-5 text-lg"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default withRouter(Login);
