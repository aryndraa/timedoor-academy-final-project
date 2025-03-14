import { DateSelect } from "./DateSelect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HoursSelect } from "./HoursSelect";

export const ReservationTime = () => {
  return (
    <div className="bg-dark-200 px-4 py-5 lg:p-8  rounded-lg">
      <div className="mb-4">
        <Swiper spaceBetween={12} slidesPerView={3.6} breakpoints={{
          640: { slidesPerView: 3.6 },
          1024: { slidesPerView: 4.2 }
        }}>
          <SwiperSlide><DateSelect /></SwiperSlide>
          <SwiperSlide><DateSelect /></SwiperSlide>
          <SwiperSlide><DateSelect /></SwiperSlide>
          <SwiperSlide><DateSelect /></SwiperSlide>
          <SwiperSlide><DateSelect /></SwiperSlide>
        </Swiper>
      </div>
      <div className="flex gap-2">
        <HoursSelect/>
        <HoursSelect/>
        <HoursSelect/>
      </div>
    </div>
  );
};
