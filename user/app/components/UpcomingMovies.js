"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { CoverCard } from "./cards/CoverCard";
import { useState, useEffect } from "react";

export const UpcomingMovies = () => {

   const [showNavigation, setShowNavigation] = useState(false);
  
    useEffect(() => {
      // Fungsi untuk mengecek lebar layar
      const handleResize = () => {
        setShowNavigation(window.innerWidth >= 1024);
      };
  
      handleResize(); // Cek saat komponen pertama kali dirender
      window.addEventListener("resize", handleResize); // Tambah event listener
  
      return () => {
        window.removeEventListener("resize", handleResize); // Cleanup
      };
    }, []);

  return (
    <div className="mt-6">
      <Swiper
        spaceBetween={12}
        slidesPerView={2.1}
        modules={[Navigation]}
        navigation={showNavigation}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { 
            slidesPerView: 4.2,
            spaceBetween: 32,
          },
        }}
        
      >
        {[...Array(5)].map((_, index) => (
          <SwiperSlide key={index}>
            <CoverCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
