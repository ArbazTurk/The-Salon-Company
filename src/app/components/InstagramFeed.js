import React from 'react';
import Link from 'next/link'; // Using Link in case these are internal pages in the future

export default function InstagramFeed() {
  // Array of image sources to keep the JSX clean
  const instagramImages = [
    "/images/gallery-square/1.webp",
    "/images/gallery-square/2.webp",
    "/images/gallery-square/3.webp",
    "/images/gallery-square/4.webp",
    "/images/gallery-square/5.webp",
    "/images/gallery-square/6.webp",
    "/images/gallery-square/7.webp",
    "/images/gallery-square/8.webp",
  ];

  return (
    <section className="bg-light relative pt50 no-bottom">
      <div className="container relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 mb-4 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">Our Instagram</div>
            <h2 className="wow fadeInUp">@almaris_hotel_theme</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {instagramImages.map((src, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <Link href="#" className="d-block hover relative overflow-hidden text-light">
                <img src={src} className="w-100 hover-scale-1-1" alt={`Instagram post ${index + 1}`} />
                <div className="abs abs-centered fs-24 text-white hover-op-0">
                  <i className="fa-brands fa-instagram"></i>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}