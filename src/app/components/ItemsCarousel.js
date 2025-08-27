'use client';
import React from 'react';
import GenericCarousel from './GenericCarousel';

export default function ItemsCarousel({ items = [] }) {
  const defaultItems = [
    {
      title: "Premium Service 1",
      description: "High-quality beauty treatment",
      image: "/images/services/lokaci services microblading 533x533.jpg",
      price: "₹2999"
    },
    {
      title: "Premium Service 2",
      description: "Professional beauty care",
      image: "/images/services/lokaci services luxury facial 533x533.jpg",
      price: "₹3999"
    },
    {
      title: "Premium Service 3",
      description: "Expert beauty solutions",
      image: "/images/services/lokaci services eyelash extensions 533x533.jpeg",
      price: "₹1999"
    },
    {
      title: "Premium Service 4",
      description: "Advanced beauty treatments",
      image: "/images/services/lokaci services lip blusing 533x533.jpg",
      price: "₹4999"
    }
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;

  return (
    <GenericCarousel
      items={carouselItems}
      showNavigation={true}
      spaceBetween={25}
      slidesPerView={4}
      breakpoints={{
        1000: { slidesPerView: 4 },
        600: { slidesPerView: 2 },
        0: { slidesPerView: 1 }
      }}
      className="items-carousel"
      renderItem={(item, index) => (
        <div className="item">
          <div className="hover relative text-light text-center wow fadeInUp">
            <img src={item.image} className="w-100 rounded-up-100" alt={item.title} />
            <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
              <h3 className="fs-24 lh-1 mb-2">{item.price}</h3>
              <h4 className="mb-0">{item.title}</h4>
            </div>
            <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1 rounded-up-100"></div>
            <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
              <p className="fs-14">{item.description}</p>
            </div>
            <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
          </div>
        </div>
      )}
    />
  );
}
