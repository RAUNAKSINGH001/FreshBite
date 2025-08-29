import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="pb-5">
    <div className="flex justify-evenly px-4 pt-15 pb-5 border-b border-gray-400">
      <div className="flex flex-col gap-5 ">
        <p className="text-4xl font-bold text-amber-600 ">FRESHBITE</p>
        <p className="max-w-sm">
          At FreshBite , we're always excited to hear from you. Wheather you
          have a project in mnd or just want to chat about how we can bring your
          ideas to life .
        </p>
        <div className="flex gap-5 justify-self-start">
          <a href="https://www.linkedin.com/in/raunak-singh-645312256/">
            <Instagram />
          </a>
          <a href="https://www.linkedin.com/in/raunak-singh-645312256/">
            <Facebook />
          </a>
          <a href="https://www.linkedin.com/in/raunak-singh-645312256/">
            <Linkedin />
          </a>
          <a href="https://www.linkedin.com/in/raunak-singh-645312256/">
            <Twitter />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">Quick Links</p>
        <div className="flex flex-col justify-between">
          <NavLink>Home</NavLink>
          <NavLink>About Us</NavLink>
          <NavLink>Services</NavLink>
          <NavLink>Portfolio</NavLink>
          <NavLink>Testimonials</NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-2xl font-bold">Quick Links</p>
        <div className="flex flex-col justify-between">
          <NavLink>Policy Updates</NavLink>
          <NavLink>Party Sharing</NavLink>
          <NavLink>Our Rights</NavLink>
          <NavLink>Data Protection</NavLink>
          <NavLink>Information</NavLink>
        </div>
      </div>
      <div className="flex flex-col gap-5 ">
        <p className="text-2xl font-bold">Sign Up Our Newsletters</p>
        <div className="flex flex-col justify-between gap-3">
             <p>Let's Stay Connected and Collaborate. </p>
        <input type="text" placeholder="Enter your email" className="bg-gray-900 text-gray-100 px-5 py-1.5 rounded-tr-2xl rounded-bl-2xl"/>
        <button className="px-5 py-1.5 rounded-tr-2xl rounded-bl-2xl bg-amber-600 text-white">Subscribe Now</button>
        </div>
       

      </div>
    </div>
    <p className="text-center "> © 2025 CWorld . All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
