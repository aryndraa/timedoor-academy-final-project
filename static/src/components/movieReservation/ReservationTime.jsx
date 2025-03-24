import { useState, useEffect } from "react";
import { DateSelect } from "./DateSelect";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { HoursSelect } from "./HoursSelect";
import { useReservation } from "../../contexts/ReservationContext";

export const ReservationTime = () => {
  const [dates, setDates] = useState([]);
  const { date, setDate, time, setTime } = useReservation(); 
  const hours = ["14:00", "16:00", "18:00"]; // Daftar jam tayang

  // Fungsi untuk mendapatkan tanggal dalam 1 minggu ke depan
  useEffect(() => {
    const getNextWeekDates = () => {
      const today = new Date();
      const nextWeekDates = [];

      for (let i = 0; i < 7; i++) {
        const date = new Date();
        date.setDate(today.getDate() + i);
        nextWeekDates.push({
          fullDate: date.toISOString().split("T")[0], // Format YYYY-MM-DD
          month: date.toLocaleString("default", { month: "short" }), // Format "Feb"
          day: date.getDate(), // Format 11
        });
      }

      setDates(nextWeekDates);
      setDate(nextWeekDates[0].fullDate); // Pilihan default: tanggal pertama
    };

    getNextWeekDates();

  }, []);

  return (
    <div className="bg-dark-200 px-4 py-5 lg:p-8 rounded-lg">
      <div className="mb-4">
        <Swiper
          spaceBetween={12}
          slidesPerView={3.6}
          breakpoints={{
            640: { slidesPerView: 3.6 },
            1024: { slidesPerView: 4.2 },
          }}
        >
          {dates.map((dat, index) => (
            <SwiperSlide key={index} onClick={() => setDate(dat.fullDate)}>
              <DateSelect
                date={dat}
                isSelected={date === dat.fullDate} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex gap-2">
        {hours.map((hour, index) => (
          <HoursSelect
            key={index}
            hour={hour}
            isSelected={time === hour} 
            onClick={() => setTime(hour)}
          />
        ))}
      </div>
    </div>
  );
};
