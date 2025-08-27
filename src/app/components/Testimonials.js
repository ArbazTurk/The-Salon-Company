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

'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import 'animate.css';

// Swiper.js के लिए जरूरी इम्पोर्ट्स
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Swiper.js की CSS फाइलों को इम्पोर्ट करें
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const TestimonialSection = () => {
  useEffect(() => {
    import('wowjs').then(WOW => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  const testimonials = [
    {
      quote: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
      author: "Donette Fondren"
    },
    {
      quote: "A truly remarkable stay! The attention to detail and the warm hospitality made our vacation perfect. We will definitely be back.",
      author: "Johnathan Doe"
    },
    {
      quote: "From the stunning views to the exquisite dining, everything at Almaris was exceptional. It's the ideal destination for relaxation.",
      author: "Jane Smith"
    },
    {
      quote: "The best hotel experience I've ever had. The staff went above and beyond to make us feel welcome. Highly recommended!",
      author: "Peter Jones"
    }
  ];

  return (
    <ParallaxProvider>
      {/* 1. सेक्शन अब हमारा "viewport" है, जिसमें overflow-hidden है */}
      <section className="relative overflow-hidden text-light section-dark">
        {/* 2. यह कंटेनर पैरालैक्स बैकग्राउंड के लिए है */}
        <div className="parallax-bg-container">
          <Parallax speed={-20} className="parallax-img-wrapper">
            <Image
              src="/images/the_salon_company/testimonial background.jpg"
              fill
              alt="Testimonial background"
              className="jarallax-img object-fit-cover" // क्लास को रख सकते हैं, कोई नुकसान नहीं है
            />
          </Parallax>
        </div>

        {/* सजावटी एलिमेंट (यह कंटेंट के पीछे रहेगा) */}
        <div className="abs abs-centered w-30" style={{ zIndex: 1 }}>
          <div className="box-slider-decor"></div>
        </div>

        {/* 3. मेन कंटेंट अब बैकग्राउंड के ऊपर है (z-index के साथ) */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <Swiper
                modules={[Pagination, Autoplay, EffectFade]}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                effect={'fade'}
                className="owl-single-dots owl-carousel owl-theme"
              >
                {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                    <div className="item">
                      <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                      <h3 className="mb-4 wow fadeInUp fs-36">{testimonial.quote}</h3>
                      <span className="wow fadeInUp">{testimonial.author}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default TestimonialSection;
