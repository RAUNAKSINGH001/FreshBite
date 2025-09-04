import React from "react";
import Home from "./components/Home";
import Aboutus from "./components/Aboutus";
import Contact from "./components/Contact";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Signin from "./pages/Signin";
import Register from "./pages/Register";
import Cart from "./pages/Cart";

import { Route, Routes, Router } from "react-router-dom";

function App() {
  return (
    <div className="w-full h-full bg-black px-5 py-2 text-white ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
