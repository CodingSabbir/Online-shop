import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { data } from 'autoprefixer';

const BestSeller = () => {
    const [sellerProduct,setSellerProduct]=useState([])
    useEffect(()=>{
       const fetchData = async ()=>{
        const res = await fetch('/public/product.json');
        const data = await res.json();
        setSellerProduct(data)
       }
       fetchData()
    },[])
    const bestSeller=sellerProduct.filter((product)=>product.status === "Best Selers")
    console.log(bestSeller)
    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-28 px-4'>
          <div className='text-center'>
          <h2 className='title'>Best Seller</h2>
            <p className='text-black/75 mx-auto mb-8 capitalize md:w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus arcu nunc, fermentum quis sapien in, placerat scelerisque risus. Class aptent taciti sociosqu ad litora torquent per </p>
          </div>
            {/* Best seller product slider */}
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            sellerProduct.map((sellerProduct) => (
                <SwiperSlide  key={sellerProduct.id}>
                    <Link to={`/shop/${sellerProduct.id}`}>
                    <img className='mx-auto w-full hover:scale-105 transition-all duration-300' src={sellerProduct.image} alt="product-img" />       
                    </Link>
                    <div className='mt-4 px-4'>
                        <h1 className='text-[16px] capitalize font-semibold '>{sellerProduct.title}</h1>
                        <div className='flex justify-between'>
                            <p className='text-slate-500 capitalize text-[16px]'>{sellerProduct.category}</p>
                            <p className='text-slate-950 capitalize text-[16px] font-mono'>{sellerProduct.price}</p>
                        </div>
                    </div>
                
                </SwiperSlide>
            ))
        }
       
       
      </Swiper>
        </div>
    );
};

export default BestSeller;