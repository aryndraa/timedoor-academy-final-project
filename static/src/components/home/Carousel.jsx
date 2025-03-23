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
      autoplay={{ delay: 10000, disableOnInteraction: false, pauseOnMouseEnter: true }}
      loop={true}
      className="w-full "
    >
      <SwiperSlide>
        <CarouselItem
          cover={"https://mdentertainment.com/pictures/wp-content/uploads/2025/01/Pabrik-Gula-Web-Banner-MD-Website-750x1059px_11zon.jpg"}
          genre={"horror"}
          title={"Pabrik Gula"}
          synopsis={"Endah, Fadhil, Dwi, Hendra, Wati, Ningsih, dan Franky berangkat bersama puluhan orang lainnya ke sebuah pabrik gula untuk menjadi....."}
          duration={"134m"}
          trailerUrl={"https://youtu.be/O76onpa-A7Y?si=JsNZOueI4waaF0lN"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem 
          cover={"https://www.thatsmags.com/image/view/202502/NeCha-Cover-Image.jpg"}
          title={"NE ZHA 2"}
          genre={"animation"}
          duration={"145m"}
          synopsis={"Setelah sambaran petir surgawi, meskipun Ne Zha dan Ao Bing selamat dengan menjadi Roh, mereka akan segera menghilang sepenuhnya. Taiyi berencan....."}
          trailerUrl={"https://youtu.be/nsXQijb0F4I?si=k_gaL96dcKqTjv1x"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem 
          cover={"https://assets.pikiran-rakyat.com/crop/0x0:0x0/703x0/webp/photo/2025/01/25/1782199697.jpeg"}
          duration={"134m"}
          genre={"drama"}
          synopsis={" Norma (Tissa Biani) yang pendiam dan pemalu merasa beruntung karena menikah dengan cinta pertamanya: Irfan (Yusuf Mahardika). Kehidupan pernikahan mereka...."}
          title={"NORMA: ANTARA MERTUA DAN MENANTU"}
          trailerUrl={"https://youtu.be/A4OjstdB-ao?si=3njMby5k0V0LsvCw"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <CarouselItem 
          title={"SNOW WHITE"}
          genre={"FANTASY"}
          duration={"104m"}
          synopsis={"sebuah film musikal live-action yang digarap ulang berdasarkan film klasik tahun 1937, akan tayang secara eksklusif di bioskop pada bulan Maret...."}
          cover={"https://4kwallpapers.com/images/walls/thumbs_3t/17907.jpeg"}
          trailerUrl={"https://youtu.be/iV46TJKL8cU?si=tM15RzEfOX-JoUOs"}

        />

      </SwiperSlide>
    </Swiper>
  );
};
