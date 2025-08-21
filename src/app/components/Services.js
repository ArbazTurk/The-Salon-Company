'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Services() {
  // Carousel ke div ko target karne ke liye ek ref
  const carouselRef = useRef(null);

  // Data for the rooms to keep the JSX clean
  const roomsData = [
    {
      imgSrc: "/images/services/lokaci services lip blusing 533x533.jpg",
      price: "129",
      title: "Lip Blushing",
      delay: ".3s"
    },
    {
      imgSrc: "/images/services/lokaci services microblading 533x533.jpg",
      price: "129",
      title: "Microblading",
      delay: ".4s"
    },
    {
      imgSrc: "/images/services/lokaci services eyeliner tattoo 533x533.jpg",
      price: "139",
      title: "Eyeliner Tattoo",
      delay: ".5s"
    },
    {
      imgSrc: "/images/services/lokaci services luxury facial 533x533.jpg",
      price: "149",
      title: "Luxury Facial",
      delay: ".7s"
    },
    {
      imgSrc: "/images/services/lokaci services bb glow 533x533.jpeg",
      price: "149",
      title: "BB Glow",
      delay: ".7s"
    },
    {
      imgSrc: "/images/services/lokaci services eyelash extensions 533x533.jpeg",
      price: "149",
      title: "Eyelash Extensions",
      delay: ".7s"
    }
  ];

  // Component render hone ke baad ye effect chalega
  useEffect(() => {

    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery;
        const owl = $(carouselRef.current);
        
        // YE CONSOLE LOG AB 100% AAYEGA
        console.log('SUCCESS: Services component found jQuery and Owl Carousel!');

        // Check karo ki carousel pehle se initialized to nahi hai
        // if (owl.hasClass('owl-loaded')) {
        //     return;
        // }

        owl.owlCarousel({
          center: false, items: 1, loop: true, margin: 30, nav: false, dots: false,
          responsive: { 1000: { items: 3 }, 600: { items: 2 }, 0: { items: 1 } }
        });
        
        $('.owl-custom-nav .btn-next').on('click', function () {
          owl.trigger('next.owl.carousel');
        });

        $('.owl-custom-nav .btn-prev').on('click', function () {
          owl.trigger('prev.owl.carousel');
        });
      } else {
        // Agar 100ms ke baad bhi na mile, to ye error aayegi
        console.error("ERROR: jQuery or Owl Carousel not found after 100ms delay.");
      }
    }, 100); // 100 millisecond ka delay

    // Cleanup function: Jab component unmount ho to timer aur events ko saaf karna
    return () => {
      clearTimeout(timer);
      if (window.jQuery) {
        $('.owl-custom-nav .btn-next').off('click');
        $('.owl-custom-nav .btn-prev').off('click');
        const owl = window.jQuery(carouselRef.current);
        if (owl.length > 0 && owl.data('owl.carousel')) {
          owl.trigger('destroy.owl.carousel');
        }
      }
    };

    // Check karna ki jQuery aur Owl Carousel loaded hain ya nahi
    // if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
    //   const $ = window.jQuery;
      
    //   const owl = $(carouselRef.current);
    //   console.log('loaded');

    //   // Owl Carousel ko initialize karna
    //   owl.owlCarousel({
    //     center: false,
    //     items: 1, // Mobile par default 1 item
    //     loop: true,
    //     margin: 30,
    //     nav: false, // Original navigation buttons hide kar rahe hain
    //     dots: false, // Original dots hide kar rahe hain
    //     responsive:{
    //         1000:{ items:3 }, // Desktop par 3 items
    //         600:{ items:2 },  // Tablet par 2 items
    //         0:{ items:1 }     // Mobile par 1 item
    //     }
    //   });
      
    //   // Custom navigation buttons (jo bahar hain) ke liye click events add karna
    //   $('.owl-custom-nav .btn-next').on('click', function () {
    //     owl.trigger('next.owl.carousel');
    //   });

    //   $('.owl-custom-nav .btn-prev').on('click', function () {
    //     owl.trigger('prev.owl.carousel');
    //   });

    //   // Cleanup function: Jab component unmount ho, to events aur carousel ko destroy karna
    //   return () => {
    //     $('.owl-custom-nav .btn-next').off('click');
    //     $('.owl-custom-nav .btn-prev').off('click');
    //     if(owl.data('owl.carousel')) { // Check karna ki carousel exist karta hai ya nahi
    //         owl.trigger('destroy.owl.carousel');
    //     }
    //   };
    // }
  }, []); // [] ka matlab hai ki ye effect sirf ek baar chalega

  return (
    <section className="relative bg-light lines-deco">
      <div className="container-fluid relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">Elegant</div>
            <h2 className="wow fadeInUp">Services</h2>
          </div>

          <div className="col-lg-12">
            {/* Yahan custom nav ke wrapper ko ek specific class di hai "owl-custom-nav" */}
            <div className="owl-custom-nav menu-float px-5">
              <a className="btn-next"></a>
              <a className="btn-prev"></a>

              {/* Is div par humne ref lagaya hai */}
              <div ref={carouselRef} id="room-carousel" className="owl-3-cols owl-carousel owl-theme">
                {roomsData.map((room, index) => (
                  <div className="item" key={index}>
                    <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay={room.delay}>
                      <img src={room.imgSrc} className="w-100 rounded-up-100" alt={room.title} />
                      <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="fs-14">From</div>
                        <h3 className="fs-40 lh-1 mb-4">${room.price}</h3>
                        <Link className="btn-line" href="/room-single">View Details</Link>
                      </div>
                      <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h3 className="mb-0">{room.title}</h3>
                        <div className="text-center fs-14">
                          <span className="mx-2">
                            {room.guests}
                          </span>
                          <span className="mx-2">
                            {room.size}
                          </span>
                        </div>
                      </div>
                      <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// 'use client';
// import React, { useRef } from 'react';
// import Link from 'next/link';

// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';

// // import required modules
// import { Navigation } from 'swiper/modules';

// export default function Accommodations() {
//   // Data for the rooms to keep the JSX clean
//   const roomsData = [
//     {
//       imgSrc: "/images/room/1.webp",
//       price: "129",
//       title: "Standard Room",
//       guests: 2,
//       size: 30,
//       delay: ".3s"
//     },
//     {
//       imgSrc: "/images/room/2.webp",
//       price: "129",
//       title: "Deluxe Room",
//       guests: 2,
//       size: 35,
//       delay: ".4s"
//     },
//     {
//       imgSrc: "/images/room/3.webp",
//       price: "139",
//       title: "Premier Room",
//       guests: 2,
//       size: 35,
//       delay: ".5s"
//     },
//     {
//       imgSrc: "/images/room/4.webp",
//       price: "149",
//       title: "Family Suite",
//       guests: 4,
//       size: 60,
//       delay: ".7s"
//     }
//   ];

//   // Ref for the custom navigation buttons
//   const swiperRef = useRef(null);

//   return (
//     <section className="relative bg-light lines-deco">
//       <div className="container-fluid relative z-2">
//         <div className="row g-4">
//           <div className="col-lg-8 offset-lg-2 text-center">
//             <div className="subtitle id-color wow fadeInUp mb-3">Elegant</div>
//             <h2 className="wow fadeInUp">Accomodation</h2>
//           </div>

//           <div className="col-lg-12">
//             <div className="owl-custom-nav menu-float px-5">
//               {/* Custom Navigation Buttons */}
//               <a className="btn-next" onClick={() => swiperRef.current?.slideNext()}></a>
//               <a className="btn-prev" onClick={() => swiperRef.current?.slidePrev()}></a>

//               <Swiper
//                 onSwiper={(swiper) => {
//                   swiperRef.current = swiper;
//                 }}
//                 modules={[Navigation]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 loop={true}
//                 breakpoints={{
//                   // when window width is >= 640px
//                   640: {
//                     slidesPerView: 1,
//                     spaceBetween: 20,
//                   },
//                   // when window width is >= 768px
//                   768: {
//                     slidesPerView: 2,
//                     spaceBetween: 30,
//                   },
//                   // when window width is >= 1024px
//                   1024: {
//                     slidesPerView: 3,
//                     spaceBetween: 30,
//                   },
//                 }}
//                 className="mySwiper"
//               >
//                 {roomsData.map((room, index) => (
//                   <SwiperSlide key={index}>
//                     <div className="item">
//                       <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay={room.delay}>
//                         <img src={room.imgSrc} className="w-100 rounded-up-100" alt={room.title} />
//                         <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
//                           <div className="fs-14">From</div>
//                           <h3 className="fs-40 lh-1 mb-4">${room.price}</h3>
//                           <Link className="btn-line" href="/room-single">View Details</Link>
//                         </div>
//                         <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
//                         <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
//                           <h3 className="mb-0">{room.title}</h3>
//                           <div className="text-center fs-14">
//                             <span className="mx-2">
//                               {room.guests} Guests
//                             </span>
//                             <span className="mx-2">
//                               {room.size} ft
//                             </span>
//                           </div>
//                         </div>
//                         <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
//                       </div>
//                     </div>
//                   </SwiperSlide>
//                 ))}
//               </Swiper>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }