import React from "react";
import { useState } from "react";
const itemsToDelivered = [
  {
    name: "Margherita Pizza",
    description:
      "Classic Italian pizza with fresh mozzarella, basil, and tomato sauce.",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    price: "₹299",
  },
  {
    name: "Paneer Butter Masala",
    description:
      "Rich and creamy curry made with cottage cheese in buttery tomato gravy.",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop",
    price: "₹249",
  },
  {
    name: "Chicken Biryani",
    description:
      "Aromatic basmati rice cooked with marinated chicken and spices.",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop",
    price: "₹349",
  },
];
function CartCard() {
  const [deliveryDate, setDeliveryDate] = useState("14 september");
  const [quantity, setQuantity] = useState("1");
  //   const [cartItems, setCartItems] = useState([]);
  //   setCartItems(itemsToDelivered);
  return (
    <div className="w-full flex flex-col gap-3 bg-black ">
      {itemsToDelivered.map((itemsDeli, idx) => (
        <div
          key={idx}
          className="w-full rounded-2xl flex  border-2 justify-between  px-14 py-2"
        >
          <div className="flex gap-10">
            <div className="rounded-2xl ">
              <img
                src={itemsDeli.image}
                alt="best1"
                className="h-28 w-40 object-center rounded-4xl"
              />
            </div>
            <div className="flex flex-col justify-between">
              <p className="text-2xl font-bold">{itemsDeli.name}</p>
              <p>{itemsDeli.price}</p>
              <div className="rounded-2xl flex   ">
                <button className="text-2xl active:scale-90 px-3 hover:bg-green-600  rounded-l-2xl" >+</button>

                <p className="px-3 text-2xl" >{quantity}</p>
                <button className="text-2xl active:scale-90 px-3 hover:bg-red-600  rounded-r-2xl" >+</button>
              </div>
            </div>
          </div>
          <p>Delivery by {deliveryDate}</p>
        </div>
      ))}
    </div>
  );
}

export default CartCard;
