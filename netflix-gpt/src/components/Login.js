import React, { useRef, useState } from "react";
import Header from "./Header";
import { BACKGROUND_URL, PHOTO_URL } from "./utils/constants";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./utils/firebase";
// import { Link } from "react-router-dom";
import { checkValidData } from "./utils/Validate";
import { addUser } from "./utils/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const handleSignToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleSubmiForm = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value); // Check Validation here
    setErrorMessage(message);
    if (message) return;

    // Sign up / Sign in
    if (!isSignInForm) {
      //Sign up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          //Update profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: PHOTO_URL ,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser; // get updated value from user that why use this instead of use user
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              setErrorMessage(errorCode + "-" + errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="backgound-img"
          src={BACKGROUND_URL}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80"
      >
        <h1 className="font-bold font-3xl py-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email Address"
        />

        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-800 w-full rounded-lg"
          onClick={handleSubmiForm}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <div className="flex">
            <p className="py-4 px-2">New to Netflix?</p>
            <p
              className="py-4 hover:underline cursor-pointer"
              onClick={handleSignToggle}
            >
              Sign up now.
            </p>
          </div>
        ) : (
          <div className="flex">
            <p className="py-4 px-2">Already registered?</p>
            <p
              className="py-4 hover:underline cursor-pointer"
              onClick={handleSignToggle}
            >
              Sign in now.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
