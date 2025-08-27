'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Thumbs } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';

export default function GenericCarousel({
  items = [],
  config = {},
  className = '',
  showNavigation = false,
  showPagination = false,
  autoplay = false,
  loop = true,
  spaceBetween = 30,
  slidesPerView = 1,
  breakpoints = null,
  renderItem
}) {
  const swiperRef = useRef(null);

  // Default configuration
  const defaultConfig = {
    modules: [Navigation, Pagination, Autoplay, Thumbs].filter(module => {
      if (showNavigation && module === Navigation) return true;
      if (showPagination && module === Pagination) return true;
      if (autoplay && module === Autoplay) return true;
      if (module === Thumbs) return true;
      return false;
    }),
    spaceBetween,
    slidesPerView,
    loop,
    navigation: showNavigation ? {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    } : false,
    pagination: showPagination ? {
      clickable: true,
      el: '.swiper-pagination'
    } : false,
    autoplay: autoplay ? {
      delay: 5000,
      disableOnInteraction: false,
    } : false,
    breakpoints,
    ...config
  };

  return (
    <div className={`generic-carousel ${className}`}>
      <Swiper
        ref={swiperRef}
        {...defaultConfig}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            {renderItem ? renderItem(item, index) : (
              <div className="item">
                {typeof item === 'string' ? item : JSON.stringify(item)}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {showNavigation && (
        <div className="swiper-navigation">
          <div className="swiper-button-prev"></div>
          <div className="swiper-button-next"></div>
        </div>
      )}

      {showPagination && (
        <div className="swiper-pagination"></div>
      )}
    </div>
  );
}
