'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, A11y } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/bundle'

export default function BannerCarousel() {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, A11y]}
      pagination={{ clickable: true }}
      navigation={false}
      loop={true}
      autoplay={{ delay: 2000 }}
      spaceBetween={24}
      slidesPerView={1}
    >
      <SwiperSlide>
        <img src="/img/banner-headset.png" alt="banner-headset" className="h-40" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/banner-keyboard.png" alt="banner-headset" className="h-40" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/banner-mousepad.png" alt="banner-headset" className="h-40" />
      </SwiperSlide>
    </Swiper>
  )
}