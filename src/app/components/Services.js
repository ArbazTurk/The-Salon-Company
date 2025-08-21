'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Services() {
  const carouselRef = useRef(null);

  // Since we don't have images for every new service, we'll reuse the existing ones.
  const availableImages = [
    "/images/services/lokaci services microblading 533x533.jpg",
    "/images/services/lokaci services luxury facial 533x533.jpg",
    "/images/services/lokaci services eyelash extensions 533x533.jpeg",
    "/images/services/lokaci services lip blusing 533x533.jpg",
    "/images/services/lokaci services bb glow 533x533.jpeg",
    "/images/services/lokaci services eyeliner tattoo 533x533.jpg"
  ];

  // We are hand-picking a few "Featured Services" from your new JSON data to show on the homepage.
  const featuredServices = [
    {
      imgSrc: availableImages[0], // Reusing image
      price: 3555, // from your JSON (Keratin Treatment)
      title: "Keratin Treatment",
      tagline: "Smooth, Frizz-Free Hair",
      delay: ".3s"
    },
    {
      imgSrc: availableImages[1], // Reusing image
      price: 4000, // from your JSON (Hydra Facial)
      title: "Hydra Facial",
      tagline: "Deep Cleanse & Hydration",
      delay: ".4s"
    },
    {
      imgSrc: availableImages[2], // Reusing image
      price: 1600, // from your JSON (Full Body Massage)
      title: "Full Body Massage",
      tagline: "Relax & Rejuvenate",
      delay: ".5s"
    },
    {
      imgSrc: availableImages[3], // Reusing image
      price: 3900, // from your JSON (Botox Treatment)
      title: "Botox Hair Treatment",
      tagline: "Repair & Strengthen",
      delay: ".6s"
    },
    {
      imgSrc: availableImages[4], // Reusing image
      price: 2240, // from your JSON (Full Body D-Tan)
      title: "Full Body D-Tan",
      tagline: "For a Radiant Glow",
      delay: ".7s"
    },
    {
      imgSrc: availableImages[5], // Reusing image
      price: 800, // from your JSON (Inoa Hair Coloring)
      title: "Inoa Hair Coloring",
      tagline: "Ammonia-Free Color",
      delay: ".8s"
    }
  ];

  // The useEffect for initializing Owl Carousel remains the same, as the structure is the same.
  useEffect(() => {
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.owlCarousel) {
        const $ = window.jQuery;
        const owl = $(carouselRef.current);

        // if (owl.hasClass('owl-loaded')) { return; }

        owl.owlCarousel({
          center: false,
          items: 1,
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          responsive: {
            1000: { items: 3 },
            600: { items: 2 },
            0: { items: 1 }
          }
        });

        $('.owl-custom-nav .btn-next').on('click', function () {
          owl.trigger('next.owl.carousel');
        });

        $('.owl-custom-nav .btn-prev').on('click', function () {
          owl.trigger('prev.owl.carousel');
        });
      } else {
        console.error("ERROR: jQuery or Owl Carousel not found after 100ms delay in Services component.");
      }
    }, 100);

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
  }, []);

  return (
    <section className="relative bg-light lines-deco">
      <div className="container-fluid relative z-2">
        <div className="row g-4">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="subtitle id-color wow fadeInUp mb-3">Our Offerings</div>
            <h2 className="wow fadeInUp">Featured Services</h2>
          </div>

          <div className="col-lg-12">
            <div className="owl-custom-nav menu-float px-5">
              <a className="btn-next"></a>
              <a className="btn-prev"></a>

              <div ref={carouselRef} id="services-carousel" className="owl-3-cols owl-carousel owl-theme">
                {featuredServices.map((service, index) => (
                  <div className="item" key={index}>
                    <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay={service.delay}>
                      <img src={service.imgSrc} className="w-100 rounded-up-100" alt={service.title} />
                      <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="fs-14">Starting From</div>
                        {/* Using Math.round to remove decimals from price */}
                        <h3 className="fs-40 lh-1 mb-4">₹{Math.round(service.price)}</h3>
                        <Link className="btn-line" href="/reservation">Book Now</Link>
                      </div>
                      <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h3 className="mb-0">{service.title}</h3>
                        <div className="text-center fs-14">
                           {/* Replaced guests/size with a more relevant tagline */}
                          <span className="mx-2">{service.tagline}</span>
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