import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-end items-end bg-gray-100 p-6">
        <div className="w-full text-left">
          <h1 className="text-2xl font-bold text-gray-800">Welcome to PopX</h1>
          <p className="text-gray-600 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <Link to="/signup">
            <button className="w-full bg-[#6C25FF] text-white mt-4 py-3 rounded-lg font-semibold hover:bg-[rgb(18,0,57)] transition">
              Create Account
            </button>
          </Link>
          <Link to="/signup">
            <button className="w-full bg-[#bb46ce] text-gray-800 mt-5 py-3 rounded-lg font-semibold hover:bg-[rgb(217,110,205)] transition">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
