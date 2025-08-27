// 'use client';
// import React from 'react';
// import GenericCarousel from './GenericCarousel';

// export default function LogoCarousel({ logos = [], variant = 'default' }) {
//   const defaultLogos = [
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 1" },
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 2" },
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 3" },
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 4" },
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 5" },
//     { src: "/images/The_Salon_Company_Logo_White.png", alt: "Brand 6" }
//   ];

//   const carouselLogos = logos.length > 0 ? logos : defaultLogos;

//   // Different configurations based on variant
//   const getConfig = () => {
//     switch (variant) {
//       case '4':
//         return {
//           slidesPerView: 4,
//           spaceBetween: 40,
//           breakpoints: {
//             1000: { slidesPerView: 4 },
//             600: { slidesPerView: 4 },
//             0: { slidesPerView: 2 }
//           }
//         };
//       case 'small':
//         return {
//           slidesPerView: 4,
//           spaceBetween: 10,
//           breakpoints: {
//             1000: { slidesPerView: 4 },
//             600: { slidesPerView: 3 },
//             0: { slidesPerView: 2 }
//           }
//         };
//       default:
//         return {
//           slidesPerView: 6,
//           spaceBetween: 40,
//           breakpoints: {
//             1000: { slidesPerView: 5 },
//             600: { slidesPerView: 4 },
//             0: { slidesPerView: 2 }
//           }
//         };
//     }
//   };

//   return (
//     <GenericCarousel
//       items={carouselLogos}
//       autoplay={true}
//       loop={true}
//       className={`logo-carousel owl-logo-${variant}`}
//       config={getConfig()}
//       renderItem={(logo, index) => (
//         <div className="item">
//           <div className="logo-item">
//             <img src={logo.src} alt={logo.alt} className="img-fluid" />
//           </div>
//         </div>
//       )}
//     />
//   );
// }
