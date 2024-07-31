import React, { useEffect } from "react";
import { auth } from "../utils/firebasse";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, displayName, email } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email }));
        navigate("/browse");
      } else {
        // User is signed out
        navigate("/");
      }
    });
  }, [dispatch, navigate]);

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //console.log("logged outt");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between items-center  px-4 z-20 text-white relative ">
      <div className="flex  font-semibold items-center ">
        <img className="w-28 h-12 mr-3" alt="logo" src={NETFLIX_LOGO_URL}></img>
        {/* <div>
          {user && (
            <>
              <Link
                to={"/browse"}
                className="mr-3 text-lg px-3 py-1 hover:bg-gray-100 hover:text-black rounded-lg"
              >
                Home
              </Link>
              <Link
                to={"/browse"}
                className="mr-3 text-lg px-3 py-1 hover:bg-gray-100 hover:text-black rounded-lg"
              >
                TVShows
              </Link>
              <Link
                to={"/browse"}
                className="mr-3 text-lg px-3 py-1 hover:bg-gray-100 hover:text-black  rounded-lg"
              >
                Movies
              </Link>
              <Link
                to={"/browse"}
                className="mr-3 text-lg px-3 py-1 hover:bg-gray-100 hover:text-black rounded-lg"
              >
                New & Popular
              </Link>
            </>
          )}
        </div> */}
      </div>
      {user && (
        <div className=" flex ">
          {user && (
            <h3 className=" mr-4 md:text-xl ml-2 ">
              welcome,{" "}
              <span className=" md:text-xl font-bold whitespace-nowrap">
                {user.displayName}
              </span>
            </h3>
          )}

          <button
            className=" mr-3 bg-blue-600 px-4 rounded shadow-red-600  hover:bg-gray-100 hover:text-black whitespace-nowrap "
            onClick={signoutHandler}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
