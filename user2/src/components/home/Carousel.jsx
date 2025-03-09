import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CarouselItem } from "./CarouselItem.jsx";

export const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full "
    >
      <SwiperSlide>
        <CarouselItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem />
      </SwiperSlide>
    </Swiper>
  );
};
