import React from 'react';
import { Link } from 'react-router-dom';

const Cetegory = () => {
    const companyLogo=[
        {id:1,img:'/src/assets/img/images/company/brand1.png'},
        {id:2,img:'/src/assets/img/images/company/brand2.png'},
        {id:3,img:'/src/assets/img/images/company/brand3.png'},
        {id:4,img:'/src/assets/img/images/company/brand4.png'},
        {id:5,img:'/src/assets/img/images/company/brand5.png'},
    ]
    return (
        <div>
            <div className='max-w-screen-2xl mx-auto px-4 xl:px-28 py-10 md:py-28'>
                <div className='flex justify-around items-center flex-wrap gpa-4 py-5'>
                    {
                      companyLogo.map(({id,img})=>(
                        <div key={id}>
                            <img src={img} alt="company-img" />
                        </div>
                      ))  
                    }
                </div>
                {/* cetegory image */}
                <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
                <p className='font-semibold uppercase md:-rotate-90 bg-black text-white md:p-1.5 p-2 text-center inline-flex sm:rounded'>Explore new and popular styles</p>
                <div>
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/images/category/image1.png" alt="" /></Link>   
                </div>
                <div className='md:w-1/2'> 
                    <div className='grid grid-cols-2 gap-2'>
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/images/category/image2.png" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/images/category/image3.png" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/images/category/image4.png" alt="" /></Link> 
                    <Link to={'/'}><img className='w-full hover:scale-105 transition-all duration-200' src="/src/assets/img/images/category/image5.png" alt="" /></Link> 
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Cetegory;