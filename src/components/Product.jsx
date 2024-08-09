import React from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add,remove} from "../redux/slices/CartSlice"

const Product = ({ post }) => {
  const { Cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  function removeItem(){
    dispatch(remove(post.id));
    toast.error("Item Removed")
  }
  function addItem(){
    dispatch(add(post));
    toast.success("Item Added")
  }

  
  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-200 ease-in  gap-3 p-4 py-5 mt-7 ml-5 rounded-xl outline-gray-700  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024] " >
      <p className="text-gray-700 font-bold text-lg text-left truncate w-40 mt-1"> {post.title}</p>
      <div className="text-gray-500">{post.description.split(" ").slice(0,10).join(" ")+"..."}</div>
      <img src={post.image} className="h-[180px] h-" alt="Product" />
      <div className="flex justify-around items-center w-full">
        <p className="text-green-600 text-lg font-semibold">${post.price}</p>
        {Cart.some((p) => p.id === post.id) ? (
          <button
          onClick={removeItem}
          className="text-[12px] uppercase tracking-wide hover:bg-gray-700 hover:text-white p-1 px-3 text-gray-700 font-semibold border-2 border-gray-700 rounded-full"
          >Remove Item</button>
        ) : (
          <button
          className="text-[12px] uppercase tracking-wide hover:bg-gray-700 hover:text-white p-1 px-3 text-gray-700 font-semibold border-2 border-gray-700 rounded-full"
          onClick={addItem}
          >Add Item</button>
        )}
      </div>
    </div>
  );
};

export default Product;
