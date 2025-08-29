import React from "react";
import chef from "./chef.js";
function Chefs() {
  return (
    <div className="h-full w-full flex flex-col px-2 pt-5">
      <div className="flex gap-4 mb-5 text-3xl font-bold justify-center">
        <p>Meet Our </p>
        <p className="text-amber-600 "> Chefs</p>
      </div>
      <div className="flex flex-wrap gap-6 justify-center  ">
        {chef.map((chef, idx) => (
          <div
            key={idx}
            className="rounded-4xl border-2 flex  h-110 w-150 gap-6  pt-8 px-3 bg-white/3 backdrop-blur-md"
          >
            <div>
              <img
                src={chef.image}
                alt="profile1"
                className="h-90 w-450 rounded-2xl object-center"
              />
            </div>
            <div className="flex flex-col gap-6 item-self-start">
              <p className="text-2xl font-bold">{chef.name}</p>
              <p className="text-1xl font-normal">{chef.description}</p>
              <button className="px-3 py-1.5 rounded-tr-2xl rounded-bl-2xl bg-amber-600">
                View All
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chefs;
