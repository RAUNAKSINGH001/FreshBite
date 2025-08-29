import React from "react";
import bestDelivered from "./bestDelivered.js";
import { ShoppingCart } from "lucide-react";

function OurBestDelivered() {
  return (
    <div className="h-full w-full flex flex-col gap-5 items-center ">
      <div className="flex gap-4 text-3xl font-bold">
        <p>Our Best</p>
        <p className="text-amber-600 "> Delivered</p>
      </div>
      {bestDelivered.map((bestDeli, idx) => (


        <div key={idx} className="rounded-2xl border-2 px-3 py-2 flex h-40vh w-180 gap-4 bg-white/3 backdrop-blur-md">
          <div className="rounded-2xl px-1  py-1">
            <img src={bestDeli.image} alt="best1" className="h-50 w-50 object-center rounded-2xl"/>
          </div>

          <div className="px-0 py-3 flex flex-col justify-self-start gap-3  ">
            <p className="font-bold text-3xl " >{bestDeli.name}</p>
            <p className="text-sm">{bestDeli.description}</p>
            <p className="text-2xl font-semibold">{bestDeli.price} /-</p>
            <div className="flex gap-5">
              <button className="bg-amber-600 text-white rounded-tr-2xl rounded-bl-2xl px-5 py-1.5 ">
                Order Now
              </button>
              <button className="bg-amber-600 text-white rounded-tr-2xl rounded-bl-2xl px-2 py-1.5 ">
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>


      ))}
    </div>
  );
}

export default OurBestDelivered;
