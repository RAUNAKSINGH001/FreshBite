import React from "react";
import Navbar from "./Navbar";
import dishes from "../assets/dishes.png";
import OurBestDelivered from './OurBestDelivered';
import TheySay from './TheySay';
import Latest from "./Latest";
import Chefs from "./Chefs";
import Footer from "./Footer";
import {useNavigate} from 'react-router-dom'

function Home() {
  const navigate = useNavigate();

  function handleClick(ele)
  {
ele.preventDefault();
navigate('/aboutus')
  }
  return (
    <div className="w-full h-full bg-black px-10 py-2 flex flex-col item-center gap-5 ">
       <div className="  flex gap-10 justify-center  pt-10  h-90vh rounded-2xl ">
      <div className="flex flex-col justify-self-start gap-8 pt-10 ">
        <div className="flex flex-col justify-center gap-3 text-6xl font-extrabold font-sans">
          <p>Experience the</p>
          <div className="flex gap-4">
            <p className="text-amber-600">Taste </p>
            <p>of the</p></div>
          <p>World</p>
          </div>
        <div className="flex flex-col justify-self-start gap-1 text-2x font-sans">
          <p>From classic favorites to exotic delights , explore a diverse</p>
          <p>menu inspired by cuisiness from across the globe . </p>
        </div>

          <button className="bg-amber-600 px-3 py-2 rounded-tr-2xl rounded-bl-2xl" onClick={handleClick}>Learn More</button>
      </div>

      <div className="flex justify-center items-center rounded-2xl" >
        <img src={dishes} alt="dishes" className="h-130 w-126 object-contain" />
      </div>
    </div>

    <OurBestDelivered/>
    <Latest/>
    <TheySay/>
    <Chefs/>
    <Footer/>

    </div>
   
  );
}

export default Home;
