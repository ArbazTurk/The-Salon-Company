'use client';
import React from 'react';
import GenericCarousel from './GenericCarousel';

export default function TestimonialCarousel({ testimonials = [], variant = 'default' }) {
  const defaultTestimonials = [
    {
      text: "Experience unparalleled beauty and personalized care at The Salon Company, where every visit is a journey into elegance, comfort, and unforgettable transformations.",
      author: "Donette Fondren",
      rating: 5
    },
    {
      text: "From the stunning decor to the impeccable service, our stay at Almaris was absolutely flawless. We can't wait to return to this urban oasis.",
      author: "John D.",
      rating: 5
    },
    {
      text: "The attention to detail is what sets Almaris apart. Every corner of the hotel is beautifully designed, creating a truly immersive and luxurious experience.",
      author: "Jane S.",
      rating: 5
    },
    {
      text: "A perfect blend of modern comfort and timeless elegance. The staff went above and beyond to make our anniversary celebration truly special.",
      author: "Michael & Sarah",
      rating: 5
    }
  ];

  const carouselTestimonials = testimonials.length > 0 ? testimonials : defaultTestimonials;

  // Different configurations based on variant
  const getConfig = () => {
    switch (variant) {
      case '2-cols':
        return {
          slidesPerView: 2,
          spaceBetween: 25,
          breakpoints: {
            1200: { slidesPerView: 2 },
            1000: { slidesPerView: 2 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }
        };
      case '1-col':
        return {
          slidesPerView: 1,
          spaceBetween: 30,
          breakpoints: {
            1000: { slidesPerView: 1 },
            600: { slidesPerView: 1 },
            0: { slidesPerView: 1 }
          }
        };
      default:
        return {
          slidesPerView: 3,
          spaceBetween: 25,
          breakpoints: {
            1200: { slidesPerView: 4 },
            1000: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }
        };
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i key={i} className={`fa ${i < rating ? 'fa-star' : 'fa-star-o'} id-color`}></i>
    ));
  };

  return (
    <GenericCarousel
      items={carouselTestimonials}
      showPagination={true}
      autoplay={true}
      loop={true}
      className={`testimonial-carousel testimonial-carousel-${variant}`}
      config={getConfig()}
      renderItem={(testimonial, index) => (
        <div className="item">
          <div className="testimonial-content">
            <div className="d-stars mb-3">
              {renderStars(testimonial.rating)}
            </div>
            <p className="text-grey">{testimonial.text}</p>
            <div className="d-author">
              <span className="font-weight-bold">{testimonial.author}</span>
            </div>
          </div>
        </div>
      )}
    />
  );
}
