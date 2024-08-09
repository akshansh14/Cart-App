import React from "react";
import { PiShoppingCartThin } from "react-icons/pi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {

  const {Cart}=useSelector((state)=>state)
  return (
    <div className=" w-full h-[80px] bg-slate-900 ">
      <div className="w-[1100px] h-full items-center justify-between px-4 flex mx-auto">
        <Link to="/">
          <img src="../logo.png" className="w-[170px]" alt="IMG" />
        </Link>


        <div className="text-white text-xl font-semibold flex items-center gap-5">
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link className="text-3xl relative" to='/cart'>
            <PiShoppingCartThin />
            {Cart.length>0 &&
            <div className="text-xs absolute top-0 -right-3 animate-bounce rounded-full bg-green-600 p-1 px-2 aspect-square">{Cart.length}</div> 
            }
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
