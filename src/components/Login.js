import React, { useRef, useState } from "react";
import { validateForm } from "../constants/validateForm";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const loginHandler = () => {
    const userInputEmail = emailRef.current.value;
    const userInputPassword = passwordRef.current.value;
    const message = validateForm(userInputEmail, userInputPassword);
    setErrorMsg(message);
  };
  return (
    <div>
      <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
        <div className="min-h-screen bg-black bg-opacity-60 px-28">
          <img
            className="w-44"
            alt="netflix-logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-1/3 bg-black bg-opacity-70 mx-auto mt-8 px-10 py-8 text-white rounded-md"
          >
            <h1 className="text-3xl font-bold my-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                className="w-full my-3 rounded-md p-3 bg-gray-900 border border-gray-500"
                type="text"
                placeholder="Full Name"
              />
            )}

            <input
              ref={emailRef}
              className="w-full my-3 rounded-md p-3 bg-gray-900 border border-gray-500"
              type="text"
              placeholder="Email"
            />
            <input
              ref={passwordRef}
              className="w-full my-3 rounded-md p-3 bg-gray-900 border border-gray-500"
              type="password"
              placeholder="Password"
            />
            {errorMsg ? <h1 className="text-red-500 font-semibold text-sm">{errorMsg}</h1> : ""}

            <button
              className="bg-red-700 text-white w-full my-3 rounded-md p-2"
              onClick={loginHandler}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <h1
              className="cursor-pointer mt-4"
              onClick={() => setIsSignInForm(!isSignInForm)}
            >
              {isSignInForm
                ? "New to Netflix? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
