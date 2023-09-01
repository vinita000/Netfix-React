import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "./utils/userSlice";
import { LOGO } from "./utils/constants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsubscribe when components un mount.
    return () => unsubscribe(); //when my header component unloads/unmounts it will unsubscribe this event, is we are not doing this then when every time header components loading this use effect call
  }, []);

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        alt="logo"
        src={LOGO}
      />
      {user && (
        <div className="flex items-center">
          {" "}
          {/* Flex container for user details */}
          <div className="flex flex-col items-center mt-4">
            <img className="w-12 h-12" alt="user-icon" src={user?.photoURL} />
            <p className="mt-2 font-bold">({user?.displayName})</p>{" "}
            {/* Add margin-top */}
          </div>
          <button className="px-2 mx-2 font-bold" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
