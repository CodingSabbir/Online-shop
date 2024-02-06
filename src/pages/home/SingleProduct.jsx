import React, { useEffect, useState } from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaStar } from "react-icons/fa6";
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
    const{id}=useParams()
    console.log(id)
    const [products,setProducts]=useState([])
    const [quantity, setQuantity] = useState(1);
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        const {status,image,price,category,title}=products

         // If the value is less than 1, set it to 1
        const handleInput = (event) => {
            let value = parseInt(event.target.value, 10);
            if (value < 1 || isNaN(value)) {
                value = 1;
            }
    
            setQuantity(value);
        };
        // product count price
        const basePrice = price
        const totalPrice = quantity * basePrice;
      
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4 mt-28'>
            <div className='max-w-7xl p-3 m-auto'>
                <div>
                    <a href="/" className='text-gery-300'>Home </a>
                    <a href="/shop" className='text-black font-bold'>/ Shop</a>
                </div>
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
                        <p className='text-xl sm:2xl font-semibold text-red-500'>${totalPrice}</p>
                        <div className='mt-3'>
                            <div className='flex flex-col text-left w-full gap-1'>
                                <p className='font-semibold'>Qunatity</p>
                                <input  onInput={handleInput} type="number" name='quantity' id='quantity' value={quantity} defaultValue={1} required className='font-semibold mb-1 border border-gray-300 text-sm max-w-full w-full outline-none rounded-md py-3 md:py-3 px-4 md:px-4 m-0 focus:border-red-500'/>
                            </div>
                            <div className='w-full text-left my-4'>
                            <button className='flex justify-center items-center px-4 w-full py-3 gap-2 bg-red-500 text-white font-bold border border-red-500 ease-in-out rounded-md duration-150 shadow-slate-600 hover:bg-white hover:text-black lg:m-0 md:px-6'><span>Confirmed Order</span><FaArrowCircleRight/></button>
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