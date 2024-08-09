import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import {remove} from "../redux/slices/CartSlice"
import toast from 'react-hot-toast'

const CartItem = ({post}) => {

    const dispatch=useDispatch()

function handelremove(){
    dispatch(remove(post.id))
    toast.error('Item Removed')
}
  return (
    <div className='flex py-[70px] pr-6 w-full border-b-2 border-slate-500'>
        <div className="w-[40%] items-center flex  justify-center"><img src={post.image} className='h-[180px]  '/></div>
        <div className="w-[60%] flex flex-col gap-3">
            <h2 className='text-xl text-gray-700 font-bold'>{post.title}</h2>
            <p className='text-lg text-gray-600'>{post.description.split(" ").slice(0,15).join(" ")+"..."}</p>
            <div className="text-xl font-semibold flex mt-4 relative w-full ">
                    <p className='text-green-600  font-bold'>${post.price}</p>
                <div className=" p-2 px-3 rounded-full bg-red-300 absolute bottom-0 right-0">
                <button
                    className=''
                    onClick={handelremove}
                    >
                        <MdDeleteOutline />
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartItem