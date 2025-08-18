'use client';
import React from 'react';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/parallax';

import { Parallax, Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function HeroSlider() {
  return (
    <section className="section-dark text-light no-top no-bottom position-relative overflow-hidden z-1000">
      <div className="v-center">
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          speed={1200}
          parallax={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "fraction",
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          loop={true}
          className="mySwiper"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="swiper-inner" style={{ backgroundImage: `url(/images/slider/1.jpg)` }}>
              <div className="sw-caption z-1000">
                <div className="container">
                  <div className="row g-4 align-items-center">
                    <div className="spacer-double"></div>
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="spacer-single"></div>
                      <div className="sw-text-wrapper">
                        <div className="slider-extra mb-3">
                          <span className="d-stars">
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                          </span>
                        </div>
                        <h1 className="slider-title mb-4">Where Every Stay is Extraordinary</h1>
                        <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">Discover the perfect blend of luxury, comfort, and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.</p>
                        <div className="spacer-30"></div>
                        <Link className="btn-main mb10 mb-3" href="/rooms">Discover Rooms</Link>
                      </div>
                    </div>
                    <div className="spacer-single"></div>
                  </div>
                </div>
              </div>
              <div className="abs abs-centered w-40">
                <div className="box-slider-decor"></div>
              </div>
              <div className="sw-overlay op-2"></div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="swiper-inner" style={{ backgroundImage: `url(/images/slider/2.jpg)` }}>
              <div className="sw-caption z-1000">
                <div className="container">
                  <div className="row g-4 align-items-center">
                    <div className="spacer-double"></div>
                    <div className="col-lg-8 offset-lg-2 text-center">
                      <div className="spacer-single"></div>
                      <div className="sw-text-wrapper">
                        <div className="slider-extra mb-3">
                          <span className="d-stars">
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                            <i className="icofont-star"></i>
                          </span>
                        </div>
                        <h1 className="slider-title mb-4">Experience Hospitality Like Never Before</h1>
                        <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">Discover the perfect blend of luxury, comfort, and convenience at Almaris. Nestled in the heart of Brooklyn, our hotel is your gateway to an unforgettable experience.</p>
                        <div className="spacer-30"></div>
                        <Link className="btn-main mb10 mb-3" href="/rooms">Discover Rooms</Link>
                      </div>
                    </div>
                    <div className="spacer-single"></div>
                  </div>
                </div>
              </div>
              <div className="abs abs-centered w-40">
                <div className="box-slider-decor"></div>
              </div>
              <div className="sw-overlay op-2"></div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}