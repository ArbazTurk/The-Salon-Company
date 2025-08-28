"use client"; // यह एक क्लाइंट कॉम्पोनेंट है, सर्वर पर नहीं चलेगा

import React, { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "animate.css";

// Swiper.js के लिए जरूरी इम्पोर्ट्स
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

// Swiper.js की CSS फाइलों को इम्पोर्ट करें
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const TestimonialSection = () => {
  useEffect(() => {
    // WOW.js को क्लाइंट-साइड पर डायनामिक रूप से इम्पोर्ट करें
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
      <style jsx global>{`
        .custom-testimonial-swiper {
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
        }
        .custom-testimonial-swiper .swiper-pagination {
          position: static;
          margin-top: 20px;
        }
        .custom-testimonial-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          margin: 0 7px;
          background: rgba(255, 255, 255, 0.2);
          opacity: 1;
          border-radius: 50%;
          transition: background 0.3s ease;
        }
        .custom-testimonial-swiper .swiper-pagination-bullet-active {
          background: #ab8965;
        }
        .custom-content-container {
          max-width: 1000px;
          width: 90%;
        }
        @media (max-width: 768px) {
          .abs-centered {
            width: 50% !important;
          }
          .custom-testimonial-section {
            padding: 60px 0;
          }
          .custom-testimonial-swiper {
            min-height: 200px;
          }
          .custom-content-container {
            width: 95%;
          }
        }
        @media (max-width: 576px) {
          .abs-centered {
            width: 70% !important;
          }
          .custom-testimonial-section {
            padding: 40px 0;
          }
          .custom-testimonial-swiper h3 {
            font-size: 24px !important;
          }
          .custom-testimonial-swiper i {
            font-size: 30px !important;
          }
          .custom-testimonial-swiper span {
            font-size: 16px !important;
          }
        }
      `}</style>
      <section
        className="custom-testimonial-section"
        style={{
          position: 'relative',
          overflow: 'hidden',
          color: '#ffffff',
          height: '80vh',
          // minHeight: '80vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#181818', // Original component se dark background
        }}
      >
        {/* पैरालैक्स बैकग्राउंड इमेज */}
        <Parallax
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
          }}
          speed={-20}
        >
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '140%',
              top: '-20%',
              left: 0,
            }}
          >
            <img
              src="/images/the_salon_company/testimonial background.jpg"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              alt=""
            />
          </div>
        </Parallax>

        {/* सजावटी बैकग्राउंड एलिमेंट */}
        <div className="abs abs-centered w-30 z-1">
          <div className="box-slider-decor"></div>
        </div>

        {/* मुख्य कंटेंट - वर्टिकल स्टैक */}
        <div className="custom-content-container" style={{ position: 'relative', zIndex: 2, textAlign: 'center',marginTop: '-200px' }}>
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
              <SwiperSlide key={index} style={{ textAlign: 'center',}}>
                <i
                  className="icofont-quote-left"
                  style={{
                    color: '#ab8965', // Original component se primary color
                    fontSize: '40px',
                    marginBottom: '16px',
                    display: 'block',
                  }}
                ></i>
                <h3
                  style={{
                    fontSize: '36px',
                    marginBottom: '16px',
                    lineHeight: '1.2',
                    fontFamily: '"Marcellus", Helvetica, Arial, sans-serif', // Original font
                    fontWeight: 300,
                    color: '#ffffff', // Original text color
                  }}
                >
                  {testimonial.quote}
                </h3>
                <span
                  style={{
                    fontSize: '18px',
                    display: 'block',
                    marginBottom: '20px',
                    fontFamily: '"Jost", Helvetica, Arial, sans-serif', // Original font
                    color: 'rgba(255, 255, 255, 0.6)', // Original author text color
                  }}
                >
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


// "use client"; // यह एक क्लाइंट कॉम्पोनेंट है, सर्वर पर नहीं चलेगा

// import React, { useEffect } from "react";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import "animate.css";

// // Swiper.js के लिए जरूरी इम्पोर्ट्स
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// // Swiper.js की CSS फाइलों को इम्पोर्ट करें
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const TestimonialSection = () => {
//   useEffect(() => {
//     // WOW.js को क्लाइंट-साइड पर डायनामिक रूप से इम्पोर्ट करें
//     import("wowjs").then((WOW) => {
//       new WOW.default.WOW({
//         live: false,
//       }).init();
//     });
//   }, []);

//   const testimonials = [
//     {
//       quote:
//         "The best haircut and beard trim I've had in years. The attention to detail is unmatched. The stylists are true professionals who listen to what you want.",
//       author: "Rahul Sharma",
//     },
//     {
//       quote:
//         "My Hydra Facial was absolutely divine! My skin has never felt so clean and radiant. A truly luxurious and relaxing experience from start to finish.",
//       author: "Priya Singh",
//     },
//     {
//       quote:
//         "I came for a Keratin treatment and the results are stunning. The staff is incredibly knowledgeable and friendly. This is my new go-to salon for all my hair needs.",
//       author: "Anjali Mehta",
//     },
//     {
//       quote:
//         "From the welcoming ambiance to the expert service, everything was perfect. The full body massage was the best I've ever experienced. Highly recommended!",
//       author: "Vikram Kumar",
//     },
//   ];

//   return (
//     <ParallaxProvider>
//       {/* section-dark क्लास डार्क बैकग्राउंड और लाइट टेक्स्ट के लिए है */}
//       <section className="relative overflow-hidden text-light section-dark">
//         {/* सजावटी बैकग्राउंड एलिमेंट */}
//         <div className="abs abs-centered w-30 z-1">
//           <div className="box-slider-decor"></div>
//         </div>

//         {/* पैरालैक्स बैकग्राउंड इमेज */}
//         <Parallax className="parallax-bg-container">
//           <div className="parallax-img-wrapper">
//           <img
//             src="/images/the_salon_company/testimonial background.jpg"
//             className="w-100"
//             alt=""
//           />
//           </div>
//         </Parallax>

//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2 text-center">
//               {/* Owl Carousel को Swiper.js से Swiper.js से बदल दिया गया है */}
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 loop={true}
//                 effect={"fade"}
//                 fadeEffect={{ crossFade: true }}
//                 className="owl-single-dots owl-carousel owl-theme" // आपकी मौजूदा CSS क्लास ताकि डॉट्स का स्टाइल बना रहे
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index} className="item">
//                     <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
//                     <h3 className="mb-4 wow fadeInUp fs-36">
//                       {testimonial.quote}
//                     </h3>
//                     <span className="wow fadeInUp">{testimonial.author}</span>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </ParallaxProvider>
//   );
// };

// export default TestimonialSection;


// "use client"; // यह एक क्लाइंट कॉम्पोनेंट है, सर्वर पर नहीं चलेगा

// import React, { useEffect } from "react";
// import Image from "next/image";
// import { ParallaxProvider, Parallax } from "react-scroll-parallax";
// import "animate.css";

// // Swiper.js के लिए जरूरी इम्पोर्ट्स
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay, EffectFade } from "swiper/modules";

// // Swiper.js की CSS फाइलों को इम्पोर्ट करें
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";

// const TestimonialSection = () => {
//   useEffect(() => {
//     // WOW.js को क्लाइंट-साइड पर डायनामिक रूप से इम्पोर्ट करें
//     import("wowjs").then((WOW) => {
//       new WOW.default.WOW({
//         live: false,
//       }).init();
//     });
//   }, []);

//   const testimonials = [
//     {
//       quote:
//         "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
//       author: "Donette Fondren",
//     },
//     {
//       quote:
//         "A truly remarkable stay! The attention to detail and the warm hospitality made our vacation perfect. We will definitely be back.",
//       author: "Johnathan Doe",
//     },
//     {
//       quote:
//         "From the stunning views to the exquisite dining, everything at Almaris was exceptional. It's the ideal destination for relaxation.",
//       author: "Jane Smith",
//     },
//     {
//       quote:
//         "The best hotel experience I've ever had. The staff went above and beyond to make us feel welcome. Highly recommended!",
//       author: "Peter Jones",
//     },
//   ];

//   return (
//     <ParallaxProvider>
//       {/* section-dark क्लास डार्क बैकग्राउंड और लाइट टेक्स्ट के लिए है */}
//       <section className="relative overflow-hidden text-light section-dark">
//         {/* सजावटी बैकग्राउंड एलिमेंट */}
//         <div className="abs abs-centered w-30 z-1">
//           <div className="box-slider-decor"></div>
//         </div>

//         {/* पैरालैक्स बैकग्राउंड इमेज */}
//         <Parallax className="parallax-bg-container">
//           <div className="parallax-img-wrapper">
//           <img
//             src="/images/the_salon_company/testimonial background.jpg"
//             className="w-100"
//             alt=""
//           />
//           </div>
//         </Parallax>

//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2 text-center">
//               {/* Owl Carousel को Swiper.js से बदल दिया गया है */}
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 loop={true}
//                 effect={"fade"}
//                 className="owl-single-dots owl-carousel owl-theme" // आपकी मौजूदा CSS क्लास ताकि डॉट्स का स्टाइल बना रहे
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index} className="item">
//                     {/* <div className="item"> */}
//                       <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
//                       <h3 className="mb-4 wow fadeInUp fs-36">
//                         {testimonial.quote}
//                       </h3>
//                       <span className="wow fadeInUp">{testimonial.author}</span>
//                     {/* </div> */}
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </ParallaxProvider>
//   );
// };

// export default TestimonialSection;

// 'use client';

// import React, { useEffect } from 'react';
// import Image from 'next/image';
// import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
// import 'animate.css';

// // Swiper.js के लिए जरूरी इम्पोर्ट्स
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// // Swiper.js की CSS फाइलों को इम्पोर्ट करें
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/effect-fade';

// const TestimonialSection = () => {
//   useEffect(() => {
//     import('wowjs').then(WOW => {
//       new WOW.default.WOW({
//         live: false,
//       }).init();
//     });
//   }, []);

//   const testimonials = [
//     {
//       quote: "Experience unparalleled luxury, comfort, and unforgettable memories.",
//       author: "Donette Fondren"
//     },
//     {
//       quote: "A truly remarkable stay! We will definitely be back.",
//       author: "Johnathan Doe"
//     },
//     {
//       quote: "From the stunning views It's the ideal destination for relaxation.",
//       author: "Jane Smith"
//     },
//     {
//       quote: "The best hotel experience eel welcome. Highly recommended!",
//       author: "Peter Jones"
//     }
//   ];

//   return (
//     <ParallaxProvider>
//       {/* 1. सेक्शन अब हमारा "viewport" है, जिसमें overflow-hidden है */}
//       <section className="relative overflow-hidden text-light section-dark">
//         {/* 2. यह कंटेनर पैरालैक्स बैकग्राउंड के लिए है */}
//         <div className="parallax-bg-container">
//           <Parallax speed={-20} className="parallax-img-wrapper">
//             <Image
//               src="/images/the_salon_company/testimonial background.jpg"
//               fill
//               alt="Testimonial background"
//               className="jarallax-img object-fit-cover" // क्लास को रख सकते हैं, कोई नुकसान नहीं है
//             />
//           </Parallax>
//         </div>

//         {/* सजावटी एलिमेंट (यह कंटेंट के पीछे रहेगा) */}
//         <div className="abs abs-centered w-30">
//           <div className="box-slider-decor"></div>
//         </div>

//         {/* 3. मेन कंटेंट अब बैकग्राउंड के ऊपर है (z-index के साथ)  position-relative z-2 */}
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2 text-center">
//               <Swiper
//                 modules={[Pagination, Autoplay, EffectFade]}
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 loop={true}
//                 effect={'fade'}
//                 className="owl-single-dots owl-carousel"
//               >
//                 {/* .owl-carousel {
//                     display: none;
//                     width: 100%;
//                     -webkit-tap-highlight-color: transparent;
//                     position: relative;
//                     z-index: 1;
//                   } */
//                       /* .owl-carousel {
//                   position: relative;
//                   margin-top: -5px;
//                   bottom: -5px;
//                   margin-bottom: -15px;
//                 } */}
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="item">
//                       <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
//                       <h3 className="mb-4 wow fadeInUp fs-36">{testimonial.quote}</h3>
//                       <span className="wow fadeInUp">{testimonial.author}</span>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </ParallaxProvider>
//   );
// };

// export default TestimonialSection;

// "use client";

// import React from "react";
// import Image from "next/image";
// import {
//   ParallaxProvider,
//   Parallax as ScrollParallax,
// } from "react-scroll-parallax"; // इसका नाम बदला ताकि Swiper के Parallax से कॉन्फ्लिक्ट न हो

// // Swiper.js के लिए जरूरी इम्पोर्ट्स
// import { Swiper, SwiperSlide } from "swiper/react";
// // Parallax मॉड्यूल को इम्पोर्ट करें
// import { Pagination, Autoplay, EffectFade, Parallax } from "swiper/modules";

// // Swiper.js की CSS फाइलों को इम्पोर्ट करें
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import "swiper/css/parallax"; // Parallax की CSS इम्पोर्ट करें

// const TestimonialSection = () => {
//   // useEffect और wowjs की अब जरूरत नहीं है, इसलिए उसे हटा दिया गया है

//   const testimonials = [
//     {
//       quote:
//         "Experience unparalleled luxury, comfort, and unforgettable memories.",
//       author: "Donette Fondren",
//     },
//     {
//       quote: "A truly remarkable stay! We will definitely be back.",
//       author: "Johnathan Doe",
//     },
//     {
//       quote:
//         "From the stunning views It's the ideal destination for relaxation.",
//       author: "Jane Smith",
//     },
//     {
//       quote: "The best hotel experience eel welcome. Highly recommended!",
//       author: "Peter Jones",
//     },
//   ];

//   return (
//     <ParallaxProvider>
//       <section className="relative overflow-hidden text-light section-dark">
//         <div className="parallax-bg-container">
//           {/* react-scroll-parallax का नाम बदलकर ScrollParallax कर दिया गया है */}
//           <ScrollParallax speed={-20} className="parallax-img-wrapper">
//             <Image
//               src="/images/the_salon_company/testimonial background.jpg"
//               fill
//               alt="Testimonial background"
//               className="jarallax-img object-fit-cover"
//             />
//           </ScrollParallax>
//         </div>

//         <div className="abs abs-centered w-30">
//           <div className="box-slider-decor"></div>
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-lg-8 offset-lg-2 text-center">
//               <Swiper
//                 // Parallax इफ़ेक्ट के लिए कॉन्फ़िगरेशन
//                 speed={1000} // एनिमेशन की स्पीड
//                 parallax={true} // Parallax को इनेबल करें
//                 modules={[Pagination, Autoplay, EffectFade, Parallax]} // Parallax मॉड्यूल को जोड़ें
//                 slidesPerView={1}
//                 pagination={{ clickable: true }}
//                 autoplay={{ delay: 5000, disableOnInteraction: false }}
//                 loop={true}
//                 effect={"fade"}
//                 className="owl-single-dots"
//               >
//                 {testimonials.map((testimonial, index) => (
//                   <SwiperSlide key={index}>
//                     {/* item क्लास के अंदर data-swiper-parallax एट्रिब्यूट जोड़ें */}
//                     {/* <div className="item"> */}
//                       <i
//                         className="icofont-quote-left id-color fs-40 mb-4"
//                         data-swiper-parallax="-200" // यह थोड़ा धीरे से आएगा
//                       ></i>
//                       <h3
//                         className="mb-4 fs-36"
//                         data-swiper-parallax="-300" // यह थोड़ी और स्पीड से आएगा
//                       >
//                         {testimonial.quote}
//                       </h3>
//                       <span
//                         data-swiper-parallax="-400" // यह सबसे तेज आएगा
//                       >
//                         {testimonial.author}
//                       </span>
//                     {/* </div> */}
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </section>
//     </ParallaxProvider>
//   );
// };

// export default TestimonialSection;
