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
                        <h1 className="slider-title mb-4">Where Artistry Meets Radiance</h1>
                        <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">From precision haircuts and classic beard trims to revitalizing facials, our expert stylists provide a complete grooming experience tailored to you.</p>
                        <div className="spacer-30"></div>
                        <Link className="btn-main mb10 mb-3" href="/services">View Our Services</Link>
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
                        <h1 className="slider-title mb-4">Wake Up to Effortless Perfection</h1>
                        <p className="col-lg-8 offset-lg-2 slider-teaser px-4 mb-0">Discover a new standard of care with our advanced hair treatments, therapeutic massages, and a full suite of services designed for the modern individual.</p>
                        <div className="spacer-30"></div>
                        <Link className="btn-main mb10 mb-3" href="tel:8800026046">Free Consultation</Link>
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