import React, { useState } from 'react';
import { FaBars, FaSearch,FaTimes,FaUser  } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import logo from "../assets/img/logo (1).png"
import { Link } from 'react-router-dom';
const Navbar = () => {
    const navItems=[
        {title:"Jewelry & Accessories",path:"/"},
        {title:"Clothing & Shoes",path:"/"},
        {title:"Home & Living",path:"/"},
        {title:"Wedding & Party",path:"/"},
        {title:"Toys & Entertainment",path:"/"},
        {title:"Art & Collectibles",path:"/"},
        {title:"Craft Supplies & Tools",path:"/"},
    ]
    const [isMenuOpen,setMenuOpen] = useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!isMenuOpen)
    }
    return (
        <header className='max-w-screen-2xl px-4 xl:px-28'>
            <nav className='container flex items-center justify-between md:py-4 pt-6 pb-3'>
            <FaSearch  className='hidden md:block text-black cursor-pointer w-5 h-5'/>
            <a href="#"><img src={logo}alt=" header logo" /></a>
            <div className='sm:flex items-center gap-5 hidden text-lg text-black '>
                <a href="#" className='flex items-center gap-2'><FaUser />Account</a>
                <a href="#" className='flex items-center gap-2'><FaBagShopping />Shop</a>
            </div>
            {/* navbar sm device */}
           
               <div onClick={toggleMenu}>
                <button>
                    {
                    isMenuOpen ? <FaTimes className='h-5 w-5 text-black'/> : <FaBars className='h-5 w-5 text-black'/>
                    }
                </button>
               </div>
           
            </nav>
            <hr />
            {/* category items */}
           <div className='mt-4'>
           <ul className='lg:flex items-center justify-between text-black hidden '>
                {
                   navItems.map(({title,path})=>(
                    <li className='hover:text-orange-500' key={title} >
                        <Link to={'/'}>{title}</Link>
                    </li>
                   ))
                }
            </ul>
           </div>
        </header>
    );
};

export default Navbar;