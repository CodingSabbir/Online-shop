import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import jsonData from "./product.json"
const Product = () => {
const [product,setProduct]=useState([])
useEffect(()=>{
const fetchData=async()=>{
 try{
    const res = await fetch(jsonData)
    const data =await res.json();
    console.log(data)

 }catch(error){
    console.log('Error fetching product',error)
 }
}
fetchData()
},[])

    return (
       <div className='max-w-screen-2xl xl:px-28 px-4 '>
         <div >
            <h2 className='title'>Or subscribe to the newsletter</h2>
        </div>
       <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
       <div className='flex flex-row md:justify-start flex-wrap md:items-center gap-4 md:gap-8'>
            <button className='capitalize text-[16px]'>all products</button>
            <button className='capitalize text-[16px]'>t-shirt</button>
            <button className='capitalize text-[16px]'>hoodies</button>
            <button className='capitalize text-[16px]'>Bag</button>
        </div>
        <div className='flex justify-end mb-4 rounded-sm'> 
            <div className='bg-black p-2 py-1 '><FaFilter className='text-white w-4 h-4' /></div>
            <select className='bg-black text-white rounded-sm px-2 py-1'>
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low-to-High</option>
            <option value="high-to-low">High-to-low</option>
        </select>
        </div>
       </div>
      
       </div>
    );
};

export default Product;