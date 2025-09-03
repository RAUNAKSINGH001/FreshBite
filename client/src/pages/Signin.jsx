import React from "react";
import { useState, useEffect } from "react";
import { Link, NavLink , useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [errMsg, setErrMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState({}); // <-- NEW STATE
  const url = "http://localhost:3000/admin/signin";
  const navigate = useNavigate();

  const handleClick = async (ele) => {
    ele.preventDefault();
    setFieldErrors({}); // Clear previous errors
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();
    if (res.ok) {
      toast.success(data.message);
      setErrMsg("");
      setFieldErrors({});
      localStorage.setItem("token", data.token);

      if (toast) {
        setTimeout(async () => {
          await navigate("/");
        }, 3000);
      }
    } else {
      // Handle Zod validation errors
      if (Array.isArray(data.errors)) {
        const errors = {};
        data.errors.forEach((err) => {
          if (err.path && err.path[0]) {
            errors[err.path[0]] = err.message;
          }
        });
        setFieldErrors(errors);
      } else if (data.msg) {
        setErrMsg(data.msg);
      } else if (data.message) {
        setErrMsg(data.message);
      } else {
        setErrMsg("Login failed. Please try again.");
      }
    }
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
          {fieldErrors.username && (
            <p className="text-red-500 text-sm">{fieldErrors.username}</p>
          )}
          <div className="flex relative rounded-2xl bg-black/40 items-center">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              className="px-8  w-full pr-10 py-2 rounded-2xl  "
              onChange={(ele) => setPassword(ele.target.value)}
            />
            <span
              className="cursor-pointer absolute right-[20px]  "
              onClick={(ele) => setShowPassword(!showPassword)}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>
          {fieldErrors.password && (
            <p className="text-red-500 text-sm">{fieldErrors.password}</p>
          )}
          <button
            className="bg-amber-600 rounded-2xl active:scale-90 px-5 py-1"
            onClick={handleClick}
          >
            Sign In
          </button>
        </form>
        <p className="">
          New to FRESHBITE ?
          <NavLink className="text-amber-600" to="/register">
            Register
          </NavLink>
        </p>
        <ToastContainer
          closeOnClick={false}
          draggable
          className="text-white"
          theme="dark"
          position="top-right"
          autoClose={3000}
        />
      </div>
    </div>
  );
}

export default Signin;
