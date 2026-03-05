import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const thumbnails = [
  { size: "120%", position: "center 80%" },
  { size: "190%", position: "right 70%" },
  { size: "190%", position: "right 80%" },
  { size: "190%", position: "center 80%" },
];

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-xl">
      {/* Main Slider */}
      <Swiper
        modules={[FreeMode, Navigation, Thumbs]}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        className="rounded-xl mb-4"
        loop={true}
      >
        {thumbnails.map((thumb, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-[16px] w-full aspect-[651/484] bg-no-repeat bg-cover bg-center transition-all duration-300"
              style={{
                backgroundColor: "#FAF2EF",
                backgroundImage: `url("src/assets/img-1.png")`,
                backgroundSize: thumb.size,
                backgroundPosition: thumb.position,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[FreeMode, Thumbs]}
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        className="thumbnail-swiper"
        loop={true}
      >
        {thumbnails.map((thumb, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="rounded-[16px] w-full aspect-[651/484] bg-no-repeat bg-cover bg-center transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: "#FAF2EF",
                backgroundImage: `url("src/assets/img-1.png")`,
                backgroundSize: thumb.size,
                backgroundPosition: thumb.position,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
