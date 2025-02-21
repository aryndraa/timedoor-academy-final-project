"use client"

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CoverCard } from "./cards/CoverCard";

export const NowPlaying = () => {
  return (
    <div className="mt-6">
      <Swiper
        spaceBetween={12}
        slidesPerView={2.1}
        
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
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
