import React, { useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const{id}=useParams()
    console.log(id)
    const [products,setProducts]=useState([])
    useEffect(()=>{
        const fetchData = async()=>{
         try{
            const res = await fetch('/public/product.json')
            const data = await res.json();
            const filterProduct=data.filter((pd) =>pd.id == id)
            setProducts(filterProduct[0])
            
         }catch(error){
            console.log('Error fetching product',error)
         }
        }
        fetchData()
        },[id])
        const {status,image,price,category,title}=products
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mt-28'>
            <div className='max-w-7xl p-3 m-auto'>
                <div className='mt-6 sm:mt-10'>
                  <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 h-max gap-6'>
                  <div>
                        <img src={image} alt="" className='w-full' />
                 </div>
                    <div>
                        <h1 className='text-[16px] text-left capitalize font-semibold '>{title}</h1>
                        <p className='mt-3 text-base text-gray-600 leading-6 text-justify sm:text-left sm:mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit laborum, cupiditate corrupti expedita ab reiciendis minus vel ipsum, doloribus nam molestias earum accusantium tenetur aspernatur architecto sunt animi, repellat numquam</p>
                        <span className='flex items-center text-[#F4CE14] sm:my-4 my-2 gap-1'>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                            <FaStar/>
                        </span>
                        <p className='text-xl sm:2xl font-semibold text-red-500'>${price}</p>
                        <div>
                            <div className='flex flex-col text-left w-full gap-1'>
                                <p className='font-semibold'>Qunatity</p>
                                <input type="number" name='price' id='price' className='font-semibold mb-1 max-w-full w-full outline-none rounded-md py-3 px-4 md:px-4 m-0 focus:border-red-500'/>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;