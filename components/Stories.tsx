"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from "next/image";

interface Sliders {
  item: string;
}

interface PropsItem {
  slides: Sliders[];
}

function Stories({ slides }: PropsItem) {
  return (
    <div className="w-full py-2">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="w-full"
        slidesPerView={3}
        spaceBetween={20} // Adjust spacing as needed
        freeMode={true}
      >
        {slides.map((item, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <div className="relative">
              <Image
              height={200}
              width={200}
                src={item.item}
                alt={`story ${i + 1}`}
                className="rounded-md h-[230px] w-[240px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Stories;
