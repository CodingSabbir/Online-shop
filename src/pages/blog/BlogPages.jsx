import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';
import Pagination from './Pagination';

const BlogPages = () => {
    const [blodData,setBlogData]=useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const pageSize = 12
    const [selectCategory, setSelectCategory]=useState(null)
    const [activecategory, setActiveCategory] = useState(null)
    useEffect(()=>{
        const fetchBlog = async ()=>{
            const url=`http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`
            if(selectCategory){
                url+=`&category=${selectCategory}`
            }
            const res = await fetch('/modern-react-js-blog-starter-files/api/blogsData.json')
            const data = await res.json()
            setBlogData(data)
        }
        fetchBlog()
    },[currentPage,pageSize,selectCategory])
    // pageChange
    const handlePageChange =(pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const handlecategoryChange =(category)=>{
        setSelectCategory(category)
        setCurrentPage(1)
        setActiveCategory(category)
    }
    return (
        <div className='xl:px-28 px-4'>
            {/* category section */}
            <div>category section</div>

            {/* blog card */}
            <BlogCard blogs={blodData} currentPage={currentPage} selectCategory={selectCategory} pageSize={pageSize}/>

            {/* pagination  */}
            <div>
                <Pagination onPageChange={handlePageChange} blogs={blodData} currentPage={currentPage} pageSize={pageSize}/>
            </div>
        </div>
    );
};

export default BlogPages;


