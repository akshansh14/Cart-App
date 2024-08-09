import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { Cart } = useSelector((state) => state);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(Cart.reduce((acc, curr) => acc + curr.price, 0));
    // eslint-disable-next-line
  },[Cart.length]);

  
  return (
    <div className="flex w-[1200px] mx-auto my-7">
     
        {Cart.length > 0 ? (


        <div className="flex ">
           <div className="w-[60%] ">
           {
              Cart.map((item, index) => {
                return <CartItem key={item.id} itemIndex={index} post={item} />;
              }
            )
           }
           </div>
            <div className="w-[35%] border-2 h-[500px] rounded-xl shadow-lg fixed bg-white right-7 items-start px-4 py-[4rem]  flex flex-col">
              <div className="mb-[4rem] w-full">
                <p className="text-xl text-green-800 uppercase font-semibold ">Your Cart</p>
                <p className="text-5xl  text-green-700 uppercase font-semibold ">Summary</p>
                <div className="text-xl font-semibold text-gray-800 mt-4">Total Items: {Cart.length}</div>
              </div>

              <div className=" w-full mt-[4rem]">
                <div className="text-xl font-semibold mb-4">Total Amount : <span className="font-bold">${total}</span> </div>
                <Link to="/">
                <button  className="text-xl bg-green-700 uppercase tracking-wider hover:bg-purple-50 hover:text-green-700 outline-green-700 outline transition-all ease-linear duration-300 text-white font-semibold  p-3 rounded-xl w-[70%] mx-auto mt-4 ">Checkout Now</button>
                </Link>
              </div>
            </div>
          
        </div>
         
        ) : (
          <div className="w-full text-center mt-[200px]">
            <p className="text-3xl text-gray-800 font-bold text-center uppercase">Cart Empty</p>
            <Link to="/">
                <button  className="text-xl bg-green-700 uppercase tracking-wider hover:bg-purple-50 hover:text-green-700 outline-green-700 outline transition-all ease-linear duration-300 text-white font-semibold  p-3 rounded-xl w-[40%] mx-auto mt-4 ">Shop Now</button>
            </Link>
          </div>
        )
        }
      
    </div>
  );
};

export default Cart;
