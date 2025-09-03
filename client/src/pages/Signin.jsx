import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const url = "http://localhost:3000/admin/register";

  const handleClick = async (ele) => {
    ele.preventDefault();
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({username, password }),
    });
  };

  return (
    <div className="w-full bg-[url('https://images.unsplash.com/photo-1694021408920-922ff450c525?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-center  ">
      <div className="bg-black/30 backdrop-blur-sm w-50vw h-screen rounded-2xl px-5 pt-20 pb-5 flex-col  border-2 gap-5 flex items-center">
        <p className="text-3xl font-bold">
          Welcom to <span className="text-amber-600">FRESHBITE</span>
        </p>
        <p className="text-3xl font-bold">Sign In</p>

        <form
          action=""
          className="flex flex-col w-140 pb-10 gap-5 border-2 px-5 pt-10 rounded-2xl bg-black/30 "
        >
          <input
            type="text"
            placeholder="Enter your username "
            value={username}
            className="px-8 py-2 rounded-2xl bg-black/40 "
            onChange={(ele) => setUsername(ele.target.value)}
          />
          <div className="flex relative rounded-2xl bg-black/40 items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              className="px-8 py-2 rounded-2xl  "
              onChange={(ele) => setPassword(ele.target.value)}
            />
            <span
              className="cursor-pointer absolute right-[20px]  "
              onClick={(ele) => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          <button
            className="bg-amber-600 rounded-2xl px-5 py-1"
            onClick={handleClick}
          >
            Sign In
          </button>
        </form>
        <p className="">
          New to FRESHBITE ?{" "}
          <NavLink className="text-amber-600" to="/register">
            Register
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Signin;
