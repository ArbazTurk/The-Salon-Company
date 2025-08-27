// 'use client';
// import React from 'react';
// import Link from 'next/link';
// import GenericCarousel from './GenericCarousel';

// export default function BlogCarousel({ blogs = [] }) {
//   const defaultBlogs = [
//     {
//       title: "Latest Beauty Trends 2024",
//       excerpt: "Discover the hottest beauty trends and treatments for this year...",
//       image: "/images/the_salon_company/1.JPG",
//       date: "Dec 15, 2024",
//       category: "Beauty Tips",
//       slug: "latest-beauty-trends-2024"
//     },
//     {
//       title: "Skin Care Routine Guide",
//       excerpt: "Learn how to create the perfect skincare routine for your skin type...",
//       image: "/images/the_salon_company/2.JPG",
//       date: "Dec 12, 2024",
//       category: "Skincare",
//       slug: "skin-care-routine-guide"
//     },
//     {
//       title: "Hair Care Essentials",
//       excerpt: "Essential tips for maintaining healthy and beautiful hair...",
//       image: "/images/the_salon_company/3.JPG",
//       date: "Dec 10, 2024",
//       category: "Hair Care",
//       slug: "hair-care-essentials"
//     }
//   ];

//   const carouselBlogs = blogs.length > 0 ? blogs : defaultBlogs;

//   return (
//     <GenericCarousel
//       items={carouselBlogs}
//       showNavigation={false}
//       spaceBetween={25}
//       slidesPerView={3}
//       breakpoints={{
//         1000: { slidesPerView: 3 },
//         600: { slidesPerView: 2 },
//         0: { slidesPerView: 1 }
//       }}
//       className="blog-carousel"
//       renderItem={(blog, index) => (
//         <div className="item">
//           <div className="blog-post">
//             <div className="blog-image">
//               <img src={blog.image} alt={blog.title} className="img-fluid" />
//               <div className="blog-category">
//                 <span>{blog.category}</span>
//               </div>
//             </div>
//             <div className="blog-content">
//               <div className="blog-date">
//                 <i className="fa fa-calendar"></i> {blog.date}
//               </div>
//               <h4 className="blog-title">
//                 <Link href={`/blog/${blog.slug}`}>
//                   {blog.title}
//                 </Link>
//               </h4>
//               <p className="blog-excerpt">{blog.excerpt}</p>
//               <Link href={`/blog/${blog.slug}`} className="btn-read-more">
//                 Read More
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     />
//   );
// }
