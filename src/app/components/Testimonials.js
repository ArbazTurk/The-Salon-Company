'use client';
import React, { useEffect, useRef } from 'react';

export default function Testimonials() {
  // useRef hook ka istemal karke hum carousel wale div ka reference lenge
  const carouselRef = useRef(null);

  // useEffect hook tab chalega jab component browser mein render ho jayega
  useEffect(() => {
    // Ye check karega ki jQuery ($) aur Owl Carousel plugin dono loaded hain ya nahi
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
      console.log('testloaded');
      const $ = window.jQuery;
      
      // Owl Carousel ko initialize karna
      const owl = $(carouselRef.current);
      owl.owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
      });

      // Ye cleanup function hai. Jab component page se hatega, to ye carousel ko destroy kar dega.
      // Isse memory leaks nahi hote.
      return () => {
        owl.trigger('destroy.owl.carousel');
      };
    }
  }, []); // Khali array [] ka matlab hai ki ye effect sirf ek baar (component mount hone par) chalega

  return (
    <section className="jarallax relative overflow-hidden text-light section-dark">
      <div className="abs abs-centered w-30">
        <div className="box-slider-decor"></div>
      </div>
      <img src="/images/the_salon_company/testimonial background.jpg" className="jarallax-img" alt="" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            {/* Carousel ke main div ko ref se connect kiya gaya hai */}
            <div ref={carouselRef} className="owl-single-dots owl-carousel owl-theme">
              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                <h3 className="mb-4 wow fadeInUp fs-36">Experience unparalleled beauty and personalized care at The Salon Company, where every visit is a journey into elegance, comfort, and unforgettable transformations.</h3>
                <span className="wow fadeInUp">Donette Fondren</span>
              </div>

              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                <h3 className="mb-4 wow fadeInUp fs-36">Experience unparalleled beauty and personalized care at The Salon Company, where every visit is a journey into elegance, comfort, and unforgettable transformations.</h3>
                <span className="wow fadeInUp">Donette Fondren</span>
              </div>

              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                <h3 className="mb-4 wow fadeInUp fs-36">Experience unparalleled beauty and personalized care at The Salon Company, where every visit is a journey into elegance, comfort, and unforgettable transformations.</h3>
                <span className="wow fadeInUp">Donette Fondren</span>
              </div>

              <div className="item">
                <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
                <h3 className="mb-4 wow fadeInUp fs-36">Experience unparalleled beauty and personalized care at The Salon Company, where every visit is a journey into elegance, comfort, and unforgettable transformations.</h3>
                <span className="wow fadeInUp">Donette Fondren</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 'use client';
// import React from 'react';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// // import required modules
// import { Pagination, Autoplay } from 'swiper/modules';

// export default function Testimonials() {
//   const testimonials = [
//     {
//       text: "Experience unparalleled luxury and personalized service at Almaris Hotel, where every stay is a journey into sophistication, comfort, and unforgettable memories.",
//       author: "Donette Fondren"
//     },
//     {
//       text: "From the stunning decor to the impeccable service, our stay at Almaris was absolutely flawless. We can't wait to return to this urban oasis.",
//       author: "John D."
//     },
//     {
//       text: "The attention to detail is what sets Almaris apart. Every corner of the hotel is beautifully designed, creating a truly immersive and luxurious experience.",
//       author: "Jane S."
//     },
//     {
//       text: "A perfect blend of modern comfort and timeless elegance. The staff went above and beyond to make our anniversary celebration truly special.",
//       author: "Michael & Sarah"
//     }
//   ];

//   return (
//     <section className="jarallax relative overflow-hidden text-light section-dark">
//       <div className="abs abs-centered w-30">
//         <div className="box-slider-decor"></div>
//       </div>
//       <img src="/images/background/1.webp" className="jarallax-img" alt="" />
//       <div className="container">
//         <div className="row">
//           <div className="col-lg-8 offset-lg-2 text-center">
//             <Swiper
//               pagination={{
//                 clickable: true,
//               }}
//               autoplay={{
//                 delay: 5000,
//                 disableOnInteraction: false,
//               }}
//               modules={[Pagination, Autoplay]}
//               loop={true}
//               className="mySwiper"
//             >
//               {testimonials.map((testimonial, index) => (
//                 <SwiperSlide key={index}>
//                   <div className="item">
//                     <i className="icofont-quote-left id-color fs-40 mb-4 wow fadeInUp"></i>
//                     <h3 className="mb-4 wow fadeInUp fs-36">{testimonial.text}</h3>
//                     <span className="wow fadeInUp">{testimonial.author}</span>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }