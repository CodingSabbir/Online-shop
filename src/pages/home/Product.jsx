import React, { useEffect, useState } from 'react';
import { FaFilter } from "react-icons/fa";
import Card from '../../components/Card';
const Product = () => {
const [product,setProduct]=useState([])
const [filterItems,setFilterItems]=useState([])
const [selectCategory,setSelectCetegory]=useState('all')
const [sortOption,setSortOption]=useState('default')
useEffect(()=>{
const fetchData = async()=>{
 try{
    const res = await fetch('/public/product.json')
    const data = await res.json();
    setProduct(data)
    setFilterItems(data)
 }catch(error){
    console.log('Error fetching product',error)
 }
}
fetchData()
},[])
// filterItems product
const filterProduct =(category)=>{
   const filter =category === 'all' ? (product) : product.filter((item)=>item.category === category);
   setFilterItems(filter);
   setCetegory(category);
}
// show all product
const showProduct=()=>{
   setFilterItems(product)
   setCetegory('all')

}
// handle sorting change
const handleSortChange = (option)=>{
   setSortOption(option)
   let sortItems=[...filterItems]
   switch(option){
      case 'A-Z':
         sortItems.sort((a,b)=> a.title.localeCompare(b.title));
         break ;

      case 'Z-A':
         sortItems.sort((a,b)=> b.title.localeCompare(a.title));
         break ;

      case 'low-to-high':
         sortItems.sort((a,b)=> a.price - b.price);
         break ;

      case 'high-to-low':
         sortItems.sort((a,b)=> b.price - a.price);
         break ;

         default:
            break ;  
   }
   setFilterItems (sortItems)
}
    return (
       <div className='max-w-screen-2xl xl:px-28 px-4 '>
         <div >
            <h2 className='title'>Or subscribe to the newsletter</h2>
        </div>
       <div className='flex flex-col md:flex-row flex-wrap md:justify-between items-center space-y-3 mb-8'>
       <div className='flex flex-row md:justify-start flex-wrap md:items-center gap-4 md:gap-8'>
            <button onClick={showProduct} className='capitalize text-[16px]'>all products</button>
            <button onClick={()=>filterProduct('Dress')} className='capitalize text-[16px]'>t-shirt</button>
            <button onClick={()=>filterProduct('Hoodies')} className='capitalize text-[16px]'>hoodies</button>
            <button onClick={()=>filterProduct('Bag')} className='capitalize text-[16px]'>Bag</button>
        </div>
        <div className='flex justify-end mb-4 rounded-sm'> 
            <div className='bg-black p-2 py-1 '><FaFilter className='text-white w-4 h-4' /></div>
         <select className='bg-black text-white rounded-sm px-2 py-1'
         id='sort'
         onChange={(e) => handleSortChange(e.target.value) }
         value={sortOption}
         >
            <option value="default">Default</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="low-to-high">Low-to-High</option>
            <option value="high-to-low">High-to-low</option>
        </select>
        </div>
       </div>
         <Card filterItems={filterItems}/>
       </div>
    );
};

export default Product;