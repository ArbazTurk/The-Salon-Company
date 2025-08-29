"use client";

import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "animate.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";

const TestimonialSection = () => {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  const testimonials = [
    {
      quote:
        "The best haircut and beard trim I've had in years. The attention to detail is unmatched. The stylists are true professionals who listen to what you want.",
      author: "Rahul Sharma",
    },
    {
      quote:
        "My Hydra Facial was absolutely divine! My skin has never felt so clean and radiant. A truly luxurious and relaxing experience from start to finish.",
      author: "Priya Singh",
    },
    {
      quote:
        "I came for a Keratin treatment and the results are stunning. The staff is incredibly knowledgeable and friendly. This is my new go-to salon for all my hair needs.",
      author: "Anjali Mehta",
    },
    {
      quote:
        "From the welcoming ambiance to the expert service, everything was perfect. The full body massage was the best I've ever experienced. Highly recommended!",
      author: "Vikram Kumar",
    },
  ];

  return (
    <ParallaxProvider>
      <section className="testimonial-section">
        <Parallax className="parallax-container" speed={-20}>
          <div className="parallax-bg-wrapper">
            <Image
              width={1920}
              height={1080}
              src="/images/the_salon_company/testimonial background.JPG"
              className="parallax-bg-image"
              alt="Testimonial Background"
            />
          </div>
        </Parallax>

        <div className="abs abs-centered arch w-30 z-1">
          <div className="box-slider-decor"></div>
        </div>

        <div className="custom-content-container">
          <Swiper
            modules={[Autoplay, EffectFade]}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            effect={"fade"}
            fadeEffect={{ crossFade: true }}
            className="custom-testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="testimonial-slide">
                <i className="icofont-quote-left testimonial-quote-icon"></i>
                <h3 className="testimonial-quote-text">{testimonial.quote}</h3>
                <span className="testimonial-quote-author">
                  {testimonial.author}
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default TestimonialSection;
