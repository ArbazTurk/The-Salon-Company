'use client'; 

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import 'animate.css';

const InstagramFeed = () => {
  useEffect(() => {
    import('wowjs').then(WOW => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  const instagramImages = [
    "/images/the_salon_company/1.JPG",
    "/images/the_salon_company/2.JPG",
    "/images/the_salon_company/3.JPG",
    "/images/the_salon_company/4.JPG",
    "/images/the_salon_company/5.JPG",
    "/images/the_salon_company/6.JPG",
    "/images/the_salon_company/7.JPG",
    "/images/the_salon_company/8.JPG",
  ];

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const imageChunks = chunkArray(instagramImages, 4);

  return (
    <section className="bg-light relative pt50 no-bottom">
      <div className="container relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 mb-4 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">
              Our Instagram
            </div>
            <h2 className="wow fadeInUp heading-2-small">@the_salon_company</h2>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row g-0">
          {imageChunks.map((chunk, colIndex) => (
            <div className="col-md-6" key={colIndex}>
              <div className="row g-0">
                {chunk.map((src, index) => (
                  <div className="col-3" key={index}>
                    <Link
                      href="https://www.instagram.com/the_salon_company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="d-block hover relative overflow-hidden text-light wow fadeInUp"
                      data-wow-delay={`${(colIndex * 4 + index) * 0.05}s`}
                    >
                      <div className="instagram-image-container">
                        <div className="image-fill">
                          <Image
                            src={src}
                            width={200}
                            height={200}
                            className="hover-scale-1-1 object-fit-cover"
                            alt={`Instagram post ${colIndex * 4 + index + 1}`}
                          />
                        </div>
                        <div className="abs abs-centered fs-24 text-white hover-op-0">
                          <i className="fa-brands fa-instagram"></i>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;