import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="logo"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      />
      { user &&
        <div className="flex items-center">
        {" "}
        {/* Flex container for user details */}
        <div className="flex flex-col items-center mt-4">
          <img className="w-12 h-12" alt="user-icon" src={user?.photoURL} />
          <p className="mt-2 font-bold italic">({user?.displayName})</p> {/* Add margin-top */}
        </div>
        <button className="px-2 mx-2 font-bold" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
      }
      
    </div>
  );
};

export default Header;
