import React, { useEffect, useState } from 'react'
import Product from '../components/Product';
import Spinner from '../components/Spinner';

const Home = () => {
   
    const API_URL = "https://fakestoreapi.com/products";
    const [loading,setLoading]=useState(false)
    const [posts,setPosts]=useState([])

    async function fetchData(){
        setLoading(true)
        try{
        const response =await fetch(API_URL)
        const data = await response.json()
        console.log(data)
        setPosts(data);
    }
    catch{
        console.log("Error");
        alert("Error fetching Data")
    }
    setLoading(false)
}

useEffect(()=>{
    fetchData();
},[])

   
  return (
    <div className='grid  xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-[1200px] mx-auto my-7 gap-3 gap-y-7'>

        {
            loading? (
               <div className=" flex absolute top-[50%] left-[50%]">
                 <Spinner/>
               </div>
            ):
            (
               <>
                {posts.length >0 ? (
                    posts.map((post)=>(
                        <Product key={post.id} post={post}/>
                    ))
                ):
                (
                    <div>No Items found</div>
                )

                }
               </>
            )
        }
       
    </div>
  )
}

export default Home