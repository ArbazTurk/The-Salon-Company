"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import "animate.css";
import { FaStar } from "react-icons/fa";

const Welcome = () => {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  return (
    <ParallaxProvider>
      <section className="relative lines-deco">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 sm-hide">
              <div className="relative wow fadeInUp" data-wow-delay=".3s">
                <div className="abs top-0 w-100 h-100">
                  <div className="shape-mask-1">
                    <Parallax speed={-15} className="parallax-container">
                      <Image
                        src="/images/welcome 1.jpg"
                        width={400}
                        height={500}
                        className="object-fit-cover"
                        alt="Salon Welcome Image 1"
                        priority
                      />
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 text-center">
              <div className="wow scaleIn">
                <div className="subtitle id-color mb-3">
                  Welcome To The Salon Company
                </div>
                <h2 className="wow fadeInUp">
                  A New Standard in Grooming & Care
                </h2>
                <div className="text-center wow fadeInUp" data-wow-delay=".5s">
                  <h4 className="fw-bold mb-1">4.9 out of 5</h4>
                  <div className="de-rating-ext fs-18">
                    <span className="d-stars">
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                      <FaStar className="star" />
                    </span>
                  </div>
                  <span className="d-block fs-14 mb-0">
                    Based on 25000+ reviews
                  </span>
                </div>
              </div>
            </div>

            <div className="col-lg-4 sm-hide">
              <div className="relative wow fadeInUp" data-wow-delay=".3s">
                <div className="abs top-0 w-100 h-100">
                  <div className="shape-mask-1">
                    <Parallax speed={-15} className="parallax-container">
                      <Image
                        src="/images/welcome 2.jpg"
                        width={400}
                        height={500}
                        className="object-fit-cover"
                        alt="Salon Welcome Image 2"
                        priority
                      />
                    </Parallax>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="spacer-double"></div>

          <div className="row g-4 relative z-2">
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icons/hair artistry.png"
                    className="w-100"
                    alt=""
                  />
                </span>
                <div className="pl-90">
                  <h4>Precision Haircuts</h4>
                  <p className="mb-0">
                    From classic men&apos;s cuts to modern styles, our stylists
                    deliver sharp, personalized results every time.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icons/beauty treatment.png"
                    className="w-100"
                    alt=""
                  />
                </span>
                <div className="pl-90">
                  <h4>Advanced Facials</h4>
                  <p className="mb-0">
                    Revitalize your skin with Hydra Facials, O3+, and Casmara
                    treatments.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icons/hair treatment icon.png"
                    className="w-100"
                    alt=""
                  />
                </span>
                <div className="pl-90">
                  <h4>Hair Treatments</h4>
                  <p className="mb-0">
                    Restore strength and shine with our premium Keratin, Botox,
                    and customized hair spa solutions.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/svg/flower-lotus-thin-svgrepo-com.svg"
                    className="w-100"
                    alt=""
                  />
                </span>
                <div className="pl-90">
                  <h4>Spa &amp; Massage</h4>
                  <p className="mb-0">
                    Relax and recharge with our calming massages and
                    rejuvenating spa treatments.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icons/beard trimming icon.png"
                    className="w-100"
                    alt=""
                  />
                </span>
                <div className="pl-90">
                  <h4>Beard Grooming</h4>
                  <p className="mb-0">
                    Perfect your look with expert beard trimming, shaving, and
                    professional coloring services.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="relative p-4 bg-white border-grey">
                <span className="abs top-= w-70px p-3 rounded-up-100 bg-color d-block">
                  <Image
                    width={40}
                    height={40}
                    src="/images/icons/premium products.png"
                    className="w-100"
                    alt="Premium Products Icon"
                  />
                </span>
                <div className="pl-90">
                  <h4>Premium Products</h4>
                  <p className="mb-0">
                    We use only the finest, trusted and industry-leading brands
                    to ensure exceptional results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ParallaxProvider>
  );
};

export default Welcome;
