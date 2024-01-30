import React from 'react';
import { FaShoppingBag } from "react-icons/fa";
import bannerImg from "../../assets/img/image-product.png"
const Banner = () => {
    return (
        <div className='bg-primaryBG px-4 xl:px-28 py-12'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center pt-20 md:py-28 gap-14'>
                {/* img section */}
                <div className='md:w-1/2'>
                    <img src={bannerImg} alt="" />
                </div>
                {/* content section */}
                <div className='md:w-1/2'>
                    <h1 className='text-5xl font-roboto font-light capitalize not-italic  text-black '>Collections</h1>
                    <p className='capitalize text-xl font-roboto font-normal text-black my-5'>you can explore ans shop many differnt collection
                    from various barands here.</p>
                    <button className='font-roboto font-semibold gap-2 capitalize  bg-black px-5 text-white py-2 rounded-sm flex items-center hover:bg-[#52D3D8]'> <FaShoppingBag className='inline-flex '/>shop now</button>
                </div>
                
            </div>
        </div>
    );
};

export default Banner;