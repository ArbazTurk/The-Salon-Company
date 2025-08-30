"use client";
import React, { useRef } from "react";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Services() {
  const swiperRef = useRef(null);

  const availableImages = [
    "/images/services/lokaci services microblading 533x533.jpg",
    "/images/services/lokaci services luxury facial 533x533.jpg",
    "/images/services/lokaci services bb glow 533x533.jpeg",
    "/images/services/lokaci services lip blusing 533x533.jpg",
    "/images/services/lokaci services bb glow 533x533.jpeg",
    "/images/services/lokaci services eyeliner tattoo 533x533.jpg",
  ];

  const featuredServices = [
    {
      imgSrc: availableImages[0],
      price: 3555,
      title: "Keratin Treatment",
      tagline: "Smooth, Frizz-Free Hair",
      delay: ".3s",
    },
    {
      imgSrc: availableImages[1],
      price: 4000,
      title: "Hydra Facial (Men)",
      tagline: "Deep Cleanse & Hydration",
      delay: ".4s",
    },
    {
      imgSrc: availableImages[2],
      price: 1600,
      title: "Full Body Massage",
      tagline: "Relax & Rejuvenate",
      delay: ".5s",
    },
    {
      imgSrc: availableImages[3],
      price: 3900,
      title: "Botox Hair Treatment",
      tagline: "Repair & Strengthen",
      delay: ".6s",
    },
    {
      imgSrc: availableImages[4],
      price: 2240,
      title: "Full Body D-Tan",
      tagline: "For a Radiant Glow",
      delay: ".7s",
    },
    {
      imgSrc: availableImages[5],
      price: 800,
      title: "Inoa Hair Coloring (Men)",
      tagline: "Ammonia-Free Color",
      delay: ".8s",
    },
  ];

  return (
    <section className="relative bg-light lines-deco">
      <div className="container-fluid relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">
              Our Offerings
            </div>
            <h2 className="wow fadeInUp">Featured Services</h2>
          </div>

          <div className="col-lg-12">
            <div className="owl-custom-nav menu-float px-5">
              <FaAngleLeft
                className="btn-prev"
                style={{
                  padding: "10px 0",
                  width: "40px",
                  height: "40px",
                  background: "var(--primary-color)",
                  color: "#ffffff",
                  borderRadius: "0 20px 20px 0",
                }}
              />
              <FaAngleRight
                className="btn-next"
                style={{
                  padding: "10px 0",
                  width: "40px",
                  height: "40px",
                  background: "var(--primary-color)",
                  color: "#ffffff",
                  borderRadius: "20px 0 0 20px",
                }}
              />
              <Swiper
                ref={swiperRef}
                modules={[Navigation]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                  nextEl: ".btn-next",
                  prevEl: ".btn-prev",
                }}
                loop={true}
                breakpoints={{
                  1000: {
                    slidesPerView: 3,
                  },
                  600: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  },
                }}
                className="owl-3-cols owl-carousel owl-theme"
              >
                {featuredServices.map((service, index) => (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <div
                        className="hover relative text-light text-center wow fadeInUp"
                        data-wow-delay={service.delay}
                      >
                        <img
                          src={service.imgSrc}
                          className="w-100 h-auto rounded-up-100"
                          alt={service.title}
                        />
                        <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                          <div className="fs-14">Starting From</div>
                          <h3 className="fs-40 lh-1 mb-4">
                            ₹{Math.round(service.price)}
                          </h3>
                          <Link
                            className="btn-line"
                            href={`/reservation?service=${encodeURIComponent(
                              service.title
                            )}`}
                          >
                            Book Now
                          </Link>
                        </div>
                        <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                        <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                          <h3 className="mb-0">{service.title}</h3>
                          <div className="text-center fs-14">
                            <span className="mx-2">{service.tagline}</span>
                          </div>
                        </div>
                        <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
