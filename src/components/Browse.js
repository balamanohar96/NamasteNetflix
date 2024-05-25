import React from "react";
import { auth } from "../utils/firebasse";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  console.log(user);

  const signoutHandler = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("logged outt");
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="bg-gradient-to-b from-black min-h-screen px-14 py-0 ">
      <div className="flex justify-between items-center navv">
        <div className="flex text-white font-semibold items-center ">
          <img
            className="w-28 h-12 mr-5"
            alt="logo"
            src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          ></img>
          <h2 className="mr-3">Home</h2>
          <h2 className="mr-3">TVShows</h2>
          <h2 className="mr-3">Movies</h2>
          <h2 className="mr-3">New & Popular</h2>
        </div>
        <div className="dropdown-section flex ">
          {user && <h3 className="text-white mr-3 ">{user.userName}</h3>}
          <img
            className="drop-btn mr-3"
            src="https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
            alt="user-icon"
          ></img>

          <h2 className="text-white mr-3 " onClick={signoutHandler}>Signout</h2>
        </div>
      </div>
    </div>
  );
};

export default Browse;
