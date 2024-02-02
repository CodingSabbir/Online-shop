import React from 'react';
import { Link } from 'react-router-dom';

const NewLatters = () => {
return (
<div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-4 md:py-16 mt-8'>
    <h3 className='title mb-8'>Follow products and discounts on Instagram</h3>
    <div className='flex flex-wrap items-center gap-4 justify-center mb-20'>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img1.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img2.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img3.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img4.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img5.png" alt="" /></Link>
        <Link to={'/'}><img src="/src/assets/img/images/instagram/img6.png" alt="" /></Link>

    </div>

    <div>
        <h3 className='title mb-8'>Or subscribe to the newsletter</h3>
        <form className='md:w-1/2   md:flex md:items-center mx-auto text-center'>
            <input type="email" name='email' id='email' placeholder='Email address...'
                className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:2/3 w-full mb-5 placeholder:text-black/50 mr-4' />
            <input type="submit" value={'SUBMIT'}
                className='bg-transparent outline-none border-b-2 border-black cursor-pointer px-5  mb-5 placeholder:text-black/50 mr-4 h-8 font-mono' />

        </form>
    </div>
</div>
);
};

export default NewLatters;
