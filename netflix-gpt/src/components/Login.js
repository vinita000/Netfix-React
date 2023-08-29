import React, { useState } from "react";
import Header from "./Header";
// import { Link } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const handleSignToggle = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          alt="backgound-img"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        />
      </div>
      <form className="absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h1 className="font-bold font-3xl py-4">
          {!isSignInForm ? "Sign Up" : "Sign In"}
        </h1>
        {
          !isSignInForm && (
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Full Name"
        />
          )
        }
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="text"
          placeholder="Email Address"
        />
        
        <input
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-6 bg-red-800 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        {isSignInForm ? (
          <div className="flex">
            <p className="py-4 px-2">New to Netflix?</p>
            <p className="py-4 hover:underline cursor-pointer" onClick={handleSignToggle}>
              Sign up now.
            </p>
          </div>
        ) : (
          <div className="flex">
            <p className="py-4 px-2">Already registered?</p>
            <p className="py-4 hover:underline cursor-pointer" onClick={handleSignToggle}>
              Sign in now.
            </p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
