import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const BlogCard = ({blogs}) => {
   const filterBlog=blogs
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                filterBlog.map((blog)=>(
                    <Link key={blog.id} className=' shadow-lg cursor-pointer p-5 rounded'>
                        <div>
                            <img src={blog.image} alt="" className='w-full'/>
                        </div>
                        <h2 className='mt-4 mb-2 hover:text-[#52D3D8] cursor-pointer font-semibold'>{blog.title}</h2>
                        <p className=' text-gray-600 mb-2'> <FaUser  className='inline-flex items-center mr-2 '/> {blog.author}</p>
                        <p className='text-gray-500 text-sm'>{blog.published_date}</p>
                    </Link>
                ))
            }
        </div>
    );
};

export default BlogCard;