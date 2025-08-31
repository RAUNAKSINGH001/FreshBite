import React from "react";
import {useState , useEffect} from 'react';
const dishes = [
  {
    dishName: "Margherita Pizza",
    halfPrice: 120,
    fullPrice: 220,
  },
  {
    dishName: "Paneer Butter Masala",
    halfPrice: 150,
    fullPrice: 280,
  },
  {
    dishName: "Veg Biryani",
    halfPrice: 130,
    fullPrice: 240,
  },
  {
    dishName: "Chicken Curry",
    halfPrice: 180,
    fullPrice: 320,
  },
  {
    dishName: "Dal Tadka",
    halfPrice: 100,
    fullPrice: 180,
  },
  {
    dishName: "Chole Bhature",
    halfPrice: 90,
    fullPrice: 160,
  },
  {
    dishName: "Masala Dosa",
    halfPrice: 80,
    fullPrice: 150,
  },
];

function Menu() {
  const [data , setData] = useState([]);
  const [added , setAdded] = useState(false);
  function handleClick(ele)
  {
    ele.preventDefault();
    setAdded(!added);
  }
  return (
    <div className="text-white flex flex-col  w-full px-4 py-4 ">
      <div className="w-full flex flex-col justify-center items-center pb-4">
        <p className="text-3xl font-extrabold text-amber-600 ">Menu</p>
        <div className="flex flex-col gap-3 mt-5 px-4 py-4 w-full ">
          {
dishes.map((dish,idx)=>
(
   <div className=" w-full flex justify-between items-center bg-white/5 backdrop:backdrop-blur-2xl rounded-2xl px-5 py-2 border-2 border-amber-50 ">
            <p>{dish.dishName}</p>
            <div className="flex gap-3 items-center ">
              <p>{dish.halfPrice}</p>
               <p>{dish.fullPrice}</p>
               <button className="px-4 py-2 rounded-2xl bg-amber-600" onClick={handleClick}>{added ? "Remove from Cart" : "Add to Cart"}</button>
            </div>
          </div>
)
)
          }
         
        </div>
      </div>
    </div>
  );
}

export default Menu;
