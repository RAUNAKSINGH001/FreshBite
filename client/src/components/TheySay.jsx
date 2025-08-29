import React from "react";
import theySaid from "./theySaid.js";
import { ShoppingCart } from "lucide-react";

function TheySay() {
  return (
    <div className="h-full w-full flex flex-col pt-5">
      <div className="flex gap-4 mb-5 text-3xl font-bold justify-center">
        <p>What They </p>
        <p className="text-amber-600 "> Say</p>
      </div>

      <div className="flex flex-wrap gap-6 justify-center">
        {theySaid.map((theySaid, idx) => (
          <div
            key={idx}
            className="rounded-4xl border-2 flex flex-col h-46 gap-3 w-60 pt-8 px-2 bg-white/3 backdrop-blur-md"
          >
            <div className="rounded-2xl px-1 gap-3 pt-2 flex justify-center">
              <img
                src={theySaid.profile}
                alt="best1"
                className="h-10 w-10 rounded-full object-center"
              />
              <p className="text-1xl font-bold">{theySaid.name}</p>
            </div>

            <div className="px-5 mt-2 flex justify-self-start">
              <p className="text-sm">{theySaid.comments}</p>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TheySay;
