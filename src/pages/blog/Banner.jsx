import React from 'react';
import { FaAngleRight } from "react-icons/fa";
import blogBannerImg from "../../assets/img/how-to-start-a-blog-2.png"
import { Link } from 'react-router-dom';
import BlogPages from './BlogPages';

const Banner = () => {
    return (
      <div>
          <div className='md:mt-32 mt-24 xl:px-28 px-4 bg-black '>
           <div className='flex justify-center items-center'>
           <img src={blogBannerImg} alt="" />
           </div>
           
        </div>
       
        <Link to={'/'}> <p className='xl:px-28 px-4 py-3 font-serif hover:text-[#52D3D8]'>Learn More <span ><FaAngleRight className='inline-block items-center text-md' /></span> </p> </Link>
        
        <BlogPages/>
      </div>
    );
};

export default Banner;