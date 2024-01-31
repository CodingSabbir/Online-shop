import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({filterItems}) => {
    return (
        <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center items-center shadow-sm gap-12'>
            {
               filterItems.map((item)=>(
                <div key={item.id}>
                    <Link to={`/shop/${item.id}`}>
                    <img className='mx-auto w-full hover:scale-105 transition-all duration-300' src={item.image} alt="product-img" />       
                    </Link>
                    <div className='mt-4 px-4'>
                        <h1 className='text-[16px] capitalize font-semibold '>{item.title}</h1>
                        <div className='flex justify-between'>
                            <p className='text-slate-500 capitalize text-[16px]'>{item.category}</p>
                            <p className='text-slate-950 capitalize text-[16px] font-mono'>{item.price}</p>
                        </div>
                    </div>
                </div>
               )) 
            }
        </div>
    );
};

export default Card;