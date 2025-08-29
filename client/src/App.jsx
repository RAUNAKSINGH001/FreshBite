import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Special from "./components/Special";
import Contact from "./components/Contact";

import Menu from "./components/Menu";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";

import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full bg-black px-5 py-2 text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/signin" element={<SignIn />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/special" element={<Special />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
