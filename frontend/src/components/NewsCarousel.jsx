import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { news } from "../data/news";
import NewsCard from "./NewsCard";

export default function NewsCarousel() {
  return (
    <div className="w-full">

      <Swiper
        modules={[Pagination]}
        slidesPerView={4}
        slidesPerGroup={2}
        spaceBetween={16}
        pagination={{ clickable: true }}
        className="pb-20"
      >
        {news.map((item) => (
          <SwiperSlide key={item.id}>
            <NewsCard item={item} />
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
}
