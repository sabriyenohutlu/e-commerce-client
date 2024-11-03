import Image from "next/image";
import "./mainSlider.scss";
import anaSayfaKız from "../../public/images/ana-sayfa-kız.png"
import anaSayfaTisort from "../../public/images/ana-sayfa-tisort.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSlider = () => {
  const images = [
    { id: 1, alt: "Ana sayfa tişört", image: anaSayfaTisort },
    { id: 2, alt: "Ürün 2", image: anaSayfaKız },
    { id: 3, alt: "Ürün 3", image: anaSayfaTisort }
  ];

  return (
    <div className="mainSlider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={anaSayfaTisort} alt={image.alt}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
