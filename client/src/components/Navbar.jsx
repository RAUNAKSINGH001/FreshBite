import React from "react";
import { Link, NavLink, Route, Routes } from "react-router-dom";
function Navbar() {
  const navElement = [
    {
      val: "Home",
      path: "/home",
    },
    {
      val: "Menu",
      path: "/menu",
    },
    {
      val: "About Us",
      path: "/aboutus",
    },
   
    {
      val: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-gray-950 rounded-2xl w-full px-5 py-3 mb-3 flex justify-between">
      <NavLink to="/">FRESHBITE</NavLink>

      <div className="flex justify-between">
        {navElement.map((navli, idx) => (
          <NavLink
            key={idx}
            to={navli.path}
            className={({ isActive }) =>
              isActive
                ? " px-3 py-1 bg-grey-800 text-white rounded-2xl "
                : "hover:bg-grey-900 text-white px-3 py-1"
            }
          >
            {navli.val}
          </NavLink>
        ))}
      </div>

      <div className="flex gap-5">
        <NavLink to="/signin">Sign In </NavLink>
        <NavLink to="/register">Register </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
