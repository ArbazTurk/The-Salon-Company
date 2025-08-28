"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { allServicesData } from "../services.js";

import 'animate.css';

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(
    Object.keys(allServicesData)[0]
  );

  useEffect(() => {
    import('wowjs').then(WOW => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, [activeCategory]);

  const placeholderImage = "/images/services/lokaci services luxury facial 533x533.jpg";

  return (
    <ParallaxProvider>
      <div>
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section id="subheader" className="relative text-light overflow-hidden">
            <div className="parallax-bg-container">
              <Parallax speed={-20} className="parallax-img-wrapper">
                <Image
                  src="/images/the_salon_company/7.JPG"
                  fill
                  className='object-fit-cover'
                  alt="Our Services Background"
                  priority
                />
              </Parallax>
            </div>
            
            <div className="container relative z-index-1000">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1>Our Full Menu</h1>
                  <p className="mt-3 lead">
                    Explore our extensive menu of services, each designed to
                    provide an unparalleled experience of luxury and care. Find
                    your perfect treatment below.
                  </p>
                  <ul className="crumb">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">Our Services</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="de-overlay"></div>
          </section>

          <section className="relative lines-deco">
            <div className="container">
              {/* Tabs Navigation */}
              <div className="row">
                <div className="col-md-12 text-center">
                  <div className="tabs-nav">
                    {Object.keys(allServicesData).map((category) => (
                      <button
                        key={category}
                        className={activeCategory === category ? "active" : ""}
                        onClick={() => setActiveCategory(category)}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="row g-4" key={activeCategory}> 
                {allServicesData[activeCategory].map((service, index) => (
                  <div className="col-lg-4 col-sm-6" key={index}>
                    <div
                      className="hover relative text-light text-center wow fadeInUp"
                      data-wow-delay={`${index * 0.1}s`}
                    >
                      <Image
                        src={placeholderImage}
                        width={533}
                        height={533}
                        className="img-fluid"
                        alt={service.service}
                      />
                      <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                        <div className="fs-14">
                          {service.discount !== "0%" ? "Special Price" : "Price"}
                        </div>
                        <h3 className="fs-40 lh-1 mb-4">
                          ₹{Math.round(service.final_price)}
                        </h3>
                        <Link className="btn-line" href="/reservation">
                          Book Now
                        </Link>
                      </div>
                      <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                      <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                        <h3 className="mb-0">{service.service}</h3>
                        {service.discount !== "0%" && (
                          <div className="text-center fs-14">
                            <span className="original-price-card">
                              Was ₹{service.price}
                            </span>
                            <span className="discount-badge-card">
                              {service.discount} OFF
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="gradient-trans-color-bottom abs w-100 h-40 bottom-0"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}