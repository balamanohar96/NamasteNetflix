import React from "react";
import { logo } from "../constants/logo";

const Login = () => {
  const loginHandler = () => {};
  return (
    <div >
      {logo}
      <img
      className="absolute"
        alt="bg"
        src="https://asets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      ></img>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-1/4 bg-black bg-opacity-60 p-4  mx-auto relative"
      >
        <h1 className="text-white">Sign In</h1>

        <input className="w-ful m-2" type="email" placeholder="Email" />
        <input className="w-ful m-2" type="password" placeholder="Password" />
        <div>
          <button className="bg-red-600 text-white " onClick={loginHandler}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
