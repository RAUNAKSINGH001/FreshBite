import React from "react";
import bestDelivered from "./bestDelivered.js";
import { ShoppingCart } from "lucide-react";

function Latest() {
  return (
    <div className="h-full w-full flex flex-col pt-5">
      <div className="flex gap-4 mb-5 text-3xl font-bold justify-center">
        <p>Our </p>
        <p className="text-amber-600 "> Latest</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {bestDelivered.map((bestDeli, idx) => (
          <div
            key={idx}
            className="rounded-4xl border-2 flex flex-col h-80 w-60 items-center px-5 py-1 bg-white/3 backdrop-blur-md"
          >
            <div className="rounded-2xl px-1 pt-2 flex justify-center">
              <img
                src={bestDeli.image}
                alt="best1"
                className="h-28 w-40 object-center rounded-4xl"
              />
            </div>

            <div className="px-5 mt-2 flex flex-col justify-self-start gap-2 ">
              <p className="font-extra-bold text-1xl ">{bestDeli.name}</p>
              <p className="text-sm">{bestDeli.description}</p>
              <div className="flex justify-between">
                <p className="text-2xl font-semibold">{bestDeli.price} /-</p>
                <button className="bg-amber-600 text-white rounded-tr-2xl rounded-bl-2xl px-2 py-1.5 ">
                  <ShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
