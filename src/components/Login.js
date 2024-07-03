import React, { useRef, useState } from "react";
import { validateForm } from "../utils/validateForm";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebasse";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import Header from "./Header";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [error, setError] = useState(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const userNameRef = useRef(null);

  const loginHandler = () => {
    const userInputEmail = emailRef.current.value;
    const userInputPassword = passwordRef.current.value;
    const anyErrorMessage = validateForm(userInputEmail, userInputPassword);
    setError(anyErrorMessage);
    if (anyErrorMessage) return;
    else {
      if (!isSignInForm) {
        //! Sign Up Logic
        if (userNameRef.current.value.trim() === "") {
          setError("Please enter name");
          return;
        }
        createUserWithEmailAndPassword(auth, userInputEmail, userInputPassword)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            updateProfile(user, {
              displayName: userNameRef.current.value,
            }).then(() => {
              const { uid, email, displayName } = user;
              dispatch(
                addUser({ displayName: displayName, uid: uid, email: email })
              );
            });
          })
          .catch((error) => {
            setError("Email already registered");
          });
      } else {
        //! Login/SignIn Logic
        signInWithEmailAndPassword(auth, userInputEmail, userInputPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const { uid, email } = user;
            dispatch(addUser({ uid: uid, email: email, displayName: "name" }));
          })
          .catch((error) => {
            setError("email or password is invalid");
          });
      }
    }
  };

  return (
    <div>
      <div className="min-h-screen bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg')]">
        <div className="min-h-screen bg-black bg-opacity-60 px-28">
          <Header />

          <p>8754539642@Bala</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-1/3 bg-black bg-opacity-70 mx-auto mt-8 px-10 py-8 text-white rounded-md"
          >
            <h1 className="text-3xl font-bold my-2">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>
            {!isSignInForm && (
              <input
                ref={userNameRef}
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
            {error ? (
              <h1 className="text-red-500 font-semibold text-sm">{error}</h1>
            ) : (
              ""
            )}

            <button
              className="bg-red-700 text-white w-full my-3 rounded-md p-2"
              onClick={loginHandler}
            >
              {isSignInForm ? "Login" : "Sign Up"}
            </button>
            <h1
              className="cursor-pointer mt-2 underline"
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
