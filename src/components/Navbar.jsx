import React, { useState } from 'react';
import { FaBars, FaSearch,FaTimes,FaUser  } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import logo from "../assets/img/logo (1).png"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../frebase.Config';
import { signOut } from '@firebase/auth';
const Navbar = () => {
    const navItems=[
        {title:"Jewelry & Accessories",path:"/"},
        {title:"Clothing & Shoes",path:"/"},
        {title:"Home & Living",path:"/"},
        {title:"Wedding & Party",path:"/"},
        {title:"Blog-Site",path:"/blog"},
        {title:"Art & Collectibles",path:"/"},
        {title:"Craft Supplies & Tools",path:"/"},
    ]
    const [isMenuOpen,setMenuOpen] = useState(false)
    const toggleMenu=()=>{
        setMenuOpen(!isMenuOpen)
    }
    // firebase auth
    const [user]=useAuthState(auth)
    // signOut function
    const handleSignOut =()=>{
        signOut(auth)
    }
    return (
        <header className=' max-w-screen-2xl px-4 xl:px-28 absolute top-0 right-0 left-0'>
            <nav className='container flex items-center justify-between md:py-4 pt-6 pb-3'>
            <FaSearch  className='hidden md:block text-black cursor-pointer w-5 h-5'/>
           <Link to={'/'}> <a href="#"><img src={logo}alt=" header logo" /></a></Link>
            <div className='sm:flex items-center gap-5 hidden text-lg text-black '>
               

                {user 
                ? (
                    <button onClick={handleSignOut} className='flex items-center gap-2'>SignOut</button>
                )
                :
                (
                    <Link to={'/signIn'}><button  href="#" className='flex items-center gap-2'>SignIn</button></Link>
                )
                }
                
                <a href="#" className='flex items-center gap-2'><FaBagShopping />Shop</a>
            </div>
           
            {/* navbar sm device */}
           
               <div className='sm:hidden'>
                <button onClick={toggleMenu}>
                    {
                    isMenuOpen ? <FaTimes className='h-5 w-5 text-black'/> : <FaBars className='h-5 w-5 text-black'/>
                    }
                </button>
               </div>
           
            </nav>
            <hr />
            {/* category items */}
           <div className='mt-4 '>
           <ul className='lg:flex items-center justify-between text-black hidden '>
                {
                   navItems.map(({title,path})=>(
                    <li className=' hover:text-[#52D3D8]' key={title} >
                        <Link to={path}>{title}</Link>
                    </li>
                   ))
                }
            </ul>
           </div>
           {/* mobile menu */}
           <div>
           <ul className={`${isMenuOpen ? "" : "hidden"} bg-black px-4 py-2 rounded text-white`}>
                {
                   navItems.map(({title,path})=>(
                    <li className='hover:text-orange-500 cursor-pointer my-3' key={title} >
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