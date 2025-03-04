"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation} from "swiper/modules";
import { CoverCard } from "./cards/CoverCard";
import { useState, useEffect } from "react";

export const NowPlaying = () => {

  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowNavigation(window.innerWidth >= 1024);
    };

    handleResize(); 
    window.addEventListener("resize", handleResize); 

    return () => {
      window.removeEventListener("resize", handleResize); 
    };
  }, []);

  return (
    <div className="mt-6 ">
      <Swiper
        modules={[Navigation]}
        spaceBetween={12}
        slidesPerView={2.1}
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
        {[...Array(10)].map((_, index) => (
          <SwiperSlide key={index}>
            <CoverCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
