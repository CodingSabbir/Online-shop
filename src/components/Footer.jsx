import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
const currentYear = new Date().getFullYear();
return (
<footer>
    {/* footer top */}
    <div className="max-w-screen-2xl container mx-auto xl:px-28 px-4">
        <div className="mt-20 mb-10 flex flex-col md:flex-row items-start justify-between gap-8">
            {/* company info */}
            <div className="md:w-[400px]">
                <Link to="/">
                <img src="/logo.svg" alt="" />
                </Link>
                <p className=" mb-8 md:my-8 text-black/75">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
                <div className="flex items-center gap-6">
                    <a href="https://www.facebook.com/profile.php?id=100026370828797&mibextid=ZbWKwL" target="_blank"
                        rel="noopener noreferrer">
                        <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#52D3D8]" />
                    </a>

                    <FaTwitter className="w-5 h-5 cursor-pointer hover:text-[#52D3D8]" />
                    <a href="https://www.linkedin.com/in/sabbir-hossain-813103285?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app&fbclid=IwAR345QwhOWzBtjaDmXB0EAAgac92ymn4RS9_adQXjvn-ps_S7gYL8t2GbR4" target="_blank"
                        rel="noopener noreferrer">
                        <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-[#52D3D8]" />
                    </a>
                    <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#52D3D8]" />
                </div>
            </div>

            {/* Catalog */}
            <div className="text-black">
                <h4 className="font-semibold mb-3">CATALOG</h4>
                <div className="space-y-2">
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Necklaces
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Hoodies
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Jewelry Box
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    T-shirt
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Jacket
                    </Link>
                </div>
            </div>

            {/* CUSTOMER SERVICES */}
            <div className="text-black">
                <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
                <div className="space-y-2">
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Contact Us
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Track Your Order
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Product Care & Repair
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Book an Appointment
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Shipping & Returns
                    </Link>
                </div>
            </div>

            {/* ABOUT US */}
            <div className="text-black">
                <h4 className="font-semibold mb-3">ABOUT US</h4>
                <div className="space-y-2">
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Our Producers
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Sitemap
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    FAQ
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    About Us
                    </Link>
                    <Link to="/" className="text-sm block hover:text-[#52D3D8]">
                    Terms & Conditions
                    </Link>
                </div>
            </div>
        </div>
    </div>

    {/* footer bottom */}
    <div className="bg-black">
        <p className="text-white text-center items-center py-3">© {currentYear} Coral, Inc.</p>
    </div>
</footer>
);
};

export default Footer;
