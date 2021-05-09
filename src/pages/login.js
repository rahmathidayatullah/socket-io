import React from "react";

export default function Login() {
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
          placeholder="Masukan alamat email anda"
          className="border rounded-lg p-4 text-sm w-96 focus:outline-none text-gray-700 mt-2"
        />
        <p className="mt-5">Password</p>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Masukan password anda"
          className="border rounded-lg p-4 text-sm w-96 focus:outline-none text-gray-700 mt-2"
        />
        <button className="p-2 text-semibold w-full rounded-lg bg-green-400 text-white font-semibold focus:outline-none duration-200 outline-none hover:bg-green-300 mt-5 text-lg">
          Login
        </button>
      </div>
    </div>
  );
}
