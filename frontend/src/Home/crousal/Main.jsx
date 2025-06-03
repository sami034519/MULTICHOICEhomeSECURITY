import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Introduction from "../Introduction/Introduction";

import Crousal1 from "./Crousal1";
import Crousal2 from "./Crousal2";
import Crousal3 from "./Crousal3";
import Crousal4 from "./Crousal4";
import Crousal5 from "./Crousal5";
import Crousal6 from "./Crousal6";
import Crousal7 from "./Crousal7";


const HeroCarousel = () => {
  return (
    <>
    <Swiper
      modules={[Autoplay, Pagination]}
      autoplay={{ delay: 5000 }}
      pagination={{ clickable: true }}
      loop={true}
      className="w-full lg:h-[80vh] h-[75vh] relative z-30 lg:mt-32 mt-28"
    >
      <SwiperSlide>
        {({ isActive }) => <Crousal1 active={isActive} />}
      </SwiperSlide>
       <SwiperSlide>
        {({ isActive }) => <Crousal2 active={isActive} />}
      </SwiperSlide>
       <SwiperSlide>
        {({ isActive }) => <Crousal6 active={isActive} />}
      </SwiperSlide>
       <SwiperSlide>
        {({ isActive }) => <Crousal4 active={isActive} />}
      </SwiperSlide>
       <SwiperSlide>
        {({ isActive }) => <Crousal5 active={isActive} />}
      </SwiperSlide>
       <SwiperSlide>
        {({ isActive }) => <Crousal3 active={isActive} />}
      </SwiperSlide>
      <SwiperSlide>
        {({ isActive }) => <Crousal7 active={isActive} />}
      </SwiperSlide>
      
    </Swiper>
    <Introduction/>
    </>
  );
};

export default HeroCarousel;

