import React from "react";
import Slideimg from './Slideimg'
import AboutStats from './AboutStats'
import AboutLeaders from './AboutLeaders'
import AboutFooter from './AboutFooter'
import { useState, useEffect } from "react";
import profile from "../assets/profile.jpg";
function Aboutus() {
  const [message, setMessage] = useState(
    "At FreshBite, our mission is to bring happiness to your table by delivering fresh, delicious, and wholesome meals at your fingertips. We strive to make food ordering not just convenient, but also a delightful experience by combining taste, quality, and speed."
  );
  const [activeButton, setActiveButton] = useState("mission");

  return (
    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1694021408920-922ff450c525?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]  bg-center rounded-2xl ">
      <div className=" bg-black/30 backdrop-blur-sm rounded-2xl px-25 pt-2 pb-8 flex flex-col gap-2 items-center">
        <p className="text-amber-600 text-3xl font-bold">About Us</p>
        <p className="text-center">
          Read more about us . Our Vision , mission , Success and many other you
          might love .
        </p>


    <div className='w-full mt-3 px-10 py-5 rounded-2xl flex justify-between bg-white/5'>
          <div className="flex flex-col gap-2 w-[500px] ">
            <p className="text-bold text-3xl ">🍴 Who We Are</p>
            <p className="text-justify pb-2">
              At FreshBite, we believe food isn't just about taste—it's about
              experiences. That's why we bring fresh, hygienic, and
              mouth-watering meals from the best local restaurants straight to
              your doorstep.
            </p>
            <div className="flex gap-10 border-t-1 pt-2 pb-6">
              <button
                className={`rounded-2xl px-5 py-2 transition duration-200 ${
                  activeButton === "mission"
                    ? "bg-amber-600 text-white shadow-md"
                    : "hover:bg-amber-600 hover:text-white"
                }`}
                onClick={(ele) => {
                  ele.preventDefault();
                  setActiveButton("mission");
                  setMessage(
                    "At FreshBite, our mission is to bring happiness to your table by delivering fresh, delicious, and wholesome meals at your fingertips. We strive to make food ordering not just convenient, but also a delightful experience by combining taste, quality, and speed."
                  );
                }}
              >
                Mission
              </button>
              <button
                className={`rounded-2xl px-5 py-2 transition duration-200 ${
                  activeButton === "vision"
                    ? "bg-amber-600 text-white shadow-md"
                    : "hover:bg-amber-600 hover:text-white"
                }`}
                onClick={(ele) => {
                  ele.preventDefault();
                  setActiveButton("vision");

                  setMessage(
                    "Our vision is to create a community where everyone has access to fresh, healthy, and affordable food, anytime and anywhere. We aim to become the most trusted food ordering platform, known for innovation, customer satisfaction, and a commitment to sustainability."
                  );
                }}
              >
                Vision
              </button>
              <button
                className={`rounded-2xl px-5 py-2 transition duration-200 ${
                  activeButton === "ourValue"
                    ? "bg-amber-600 text-white shadow-md"
                    : "hover:bg-amber-600 hover:text-white"
                }`}
                onClick={(ele) => {
                  ele.preventDefault();
                  setActiveButton("ourValue");

                  setMessage(
                    "At FreshBite, our values define who we are and guide everything we do. We put our customers first, ensuring every meal brings satisfaction and joy. We are dedicated to maintaining the freshness and quality of our food, never compromising on taste, hygiene, or ingredients. With a spirit of innovation, we continuously explore smarter ways to make food ordering simple and convenient. We also care deeply about the planet, embracing sustainable practices that contribute to a greener future. Above all, we believe in teamwork and integrity, working with honesty and dedication to create a service you can trust and love.This is our value."
                  );
                }}
              >
                Our Value
              </button>
            </div>

            {message && <p className="text-justify ">{message}</p>}
          </div>
          <div className="w-[500px] flex justify-center  items-center">
            <img
              src={profile}
              alt="profile"
              className=" w-[500px] h-120 rounded-2xl object-center "
            />
          </div>
        </div>

<Slideimg/>
<AboutStats/>
<AboutLeaders/>
<AboutFooter/>
      

        

      
          
      </div>
    </div>
  );
}

export default Aboutus;
