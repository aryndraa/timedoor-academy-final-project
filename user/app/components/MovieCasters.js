"use client"

import { CasterCard } from "./cards/CasterCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const MovieCasters = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Casters</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4.5 },
        }}
      >
        <SwiperSlide><CasterCard /></SwiperSlide>
        <SwiperSlide><CasterCard /></SwiperSlide>
        <SwiperSlide><CasterCard /></SwiperSlide>
        <SwiperSlide><CasterCard /></SwiperSlide>
        <SwiperSlide><CasterCard /></SwiperSlide>
      </Swiper>
    </div>
  );
};
