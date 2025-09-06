import React from 'react'
import {useState} from 'react'
import { ShoppingCart } from "lucide-react";
import {useNavigate} from 'react-router-dom'
function DishCard( {name , idx , description , price , image}) {
    const [isOrdered , setIsOrdered] = useState(false)

    const handleClick = (ele)=>
    {
        ele.preventDefault();
        setIsOrdered(!isOrdered);
    }
      const navigate = useNavigate();

  function handleClickk(ele)
  {
ele.preventDefault();
navigate('/cart')
  }
  return (
      <div className="rounded-2xl border-2 px-3 py-2 flex h-40vh w-180 gap-4 bg-white/3 backdrop-blur-md">
          <div className="rounded-2xl px-1  py-1">
            <img src={image} alt="best1" className="h-50 w-50 object-center rounded-2xl"/>
          </div>

          <div className="px-0 py-3 flex flex-col justify-self-start gap-3  ">
            <p className="font-bold text-3xl " >{name}</p>
            <p className="text-sm">{description}</p>
            <p className="text-2xl font-semibold">{price} /-</p>
            <div className="flex gap-5">
              <button className="bg-amber-600 text-white rounded-tr-2xl rounded-bl-2xl px-5 py-1.5 " onClick={handleClick}>
                { 
                    isOrdered ? "Remove" : "Order Now"
                }
              </button>
              <button className="bg-amber-600 text-white rounded-tr-2xl rounded-bl-2xl px-2 py-1.5 " onClick={handleClickk}>
                <ShoppingCart />
              </button>
            </div>
          </div>
        </div>
  )
}

export default DishCard
