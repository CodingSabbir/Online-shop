import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const BlogPages = () => {
    const [blodData,setBlogData]=useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12
    const [selectCategory, setSelectCategory]=useState(null)
    useEffect(()=>{
        const fetchBlog = async ()=>{
            const url='http://localhost:5000/blogs'
            if(selectCategory){
                url+=`/blo${selectCategory}`
            }
            const res = await fetch('/modern-react-js-blog-starter-files/api/blogsData.json')
            const data = await res.json()
            setBlogData(data)
        }
        fetchBlog()
    },[])
    return (
        <div className='xl:px-28 px-4'>
            {/* category section */}
            <div>category section</div>

            {/* blog card */}
            <BlogCard blogs={blodData}/>

            {/* pagination  */}
            <div>pagination</div>
        </div>
    );
};

export default BlogPages;


