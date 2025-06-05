import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-start justify-start bg-gray-100 px-4">
      <div className="w-full max-w-md p-4 mt-5">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2 text-left">
          Signin to your PopX account
        </h1>

        <p className="text-gray-800 text-md mb-6 text-center text-left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mb-4">
          <label className="block text-[#6C25FF] text-sm mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Enter Email Address
"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#6C25FF] text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <Link to="/profile">
          <button
            type="button"
            className="w-full bg-[#786e89] text-white py-2 rounded hover:bg-[rgb(198,194,206)] transition duration-200"
          >
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
