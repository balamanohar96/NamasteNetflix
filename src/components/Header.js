import React, { useEffect } from "react";
import { auth } from "../utils/firebasse";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { NETFLIX_LOGO_URL, USER_AVATAR_ICON } from "../utils/constants";

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
        console.log("logged outt");
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="flex justify-between items-center  z-10  navv">
      <div className="flex  font-semibold items-center ">
        <img className="w-28 h-12 mr-3" alt="logo" src={NETFLIX_LOGO_URL}></img>
        {user && (
          <>
            <h2 className="mr-3">Home</h2>
            <h2 className="mr-3">TVShows</h2>
            <h2 className="mr-3">Movies</h2>
            <h2 className="mr-3">New & Popular</h2>
          </>
        )}
      </div>
      {user && (
        <div className="dropdown-section flex ">
          {user && <h3 className=" mr-3 ">name+{user.displayName}</h3>}
          <img
            className="drop-btn mr-3"
            src={USER_AVATAR_ICON}
            alt="user-icon"
          ></img>

          <h2 className=" mr-3 " onClick={signoutHandler}>
            Signout
          </h2>
        </div>
      )}
    </div>
  );
};

export default Header;
