import React from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./App.css";
import Profile from "./features/profile/Profile";
import SignIn from "./features/signIn/SignIn";
import SignUp from "./features/signUp/SignUp";
import Counter from "./features/counter/Counter";
import TestComp from "./TestComp";

function App() {
  const signIn = useSelector((state) => state.signIn);
  return (
    <>
      <div className="flex flex-row items-center  h-10 px-4 py-0 w-full bg-black   child:text-white child-hover:bg-slate-700 child:h-full       child:items-center child-hover:scale-110 child:duration-200 nav-app overflow-y-hidden">
        <div >
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/SignUp">SignUp</Link>
        </div>
        <div>
          <Link to="/Profile">Profile</Link>
        </div>
        <div>
          <Link to="/Counter">Counter</Link>
        </div>
        <div>
          <Link to={"/Test"}>TailWindTest</Link>
        </div>
      </div>

      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/Test" element={<TestComp />} />
      </Routes>

      <div>About Me</div>
    </>
  );

  return (
    <div className="App">{!signIn.isSigned ? <SignIn /> : <Profile />}</div>
  );
}

export default App;
