import Image from "next/image";
import "./mainSlider.scss";
import sale20 from "../../public/images/sale20.png";
import pexelsGirl from "../../public/images/pexels-girl.jpg";
import pexelsKing from "../../public/images/pexels-king.jpg";
import pexelsPlayHard from "../../public/images/pexels-playhard.jpg";
import pexelsMan from "../../public/images/pexels-man.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const MainSlider = () => {
  const images = [
    { id: 1, alt: "Ana sayfa tişört", image: pexelsGirl },
    { id: 2, alt: "Ürün 2", image: pexelsMan },
    { id: 3, alt: "king", image: pexelsKing },
  ];

  return (
    <div className="mainSlider">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {images.map((image) => (
          <SwiperSlide key={image.id}>
            <Image src={image.image} alt={image.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MainSlider;
