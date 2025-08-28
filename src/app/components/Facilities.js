"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import "animate.css";

const FacilitiesSection = () => {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  return (
    <>
      <section className="relative lines-deco">
        <div className="container relative z-2">
          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="subtitle id-color wow fadeInUp mb-3">
                Experience The Difference
              </div>
              <h2 className="wow fadeInUp">Quality & Variety by the Numbers</h2>
            </div>
            <div className="col-md-6">
              <div className="relative">
                <img
                  src="/images/the_salon_company/4.JPG"
                  className="img-fluid wow fadeInUp"
                  alt="Happy Clients at The Salon Company"
                />
                {/* <Image 
                  src="/images/the_salon_company/4.JPG" 
                  className="img-fluid wow fadeInUp" 
                  alt="Happy Clients at The Salon Company"
                  width={800}
                  height={533}
                /> */}
                <div className="bg-color text-light p-4 start-10 mx-4 mt-70 wow fadeInDown" style={{ position: 'sticky', zIndex: 1 }}>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div
                        className="de_count fs-15 wow fadeInRight"
                        data-wow-delay=".2s"
                      >
                        <h3 className="fs-60">
                          <CountUp
                            end={800}
                            duration={3}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                          +
                        </h3>
                        Happy Clients
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">
                        Our top priority is your satisfaction. We provide
                        personalized care to ensure you leave feeling confident
                        and refreshed.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="relative">
                <img
                  src="/images/the_salon_company/facilities 1.jpg"
                  className="img-fluid wow fadeInUp"
                  alt="Wide Range of Salon Services"
                />
                {/* <Image 
                  src="/images/the_salon_company/facilities 1.jpg" 
                  className="img-fluid wow fadeInUp" 
                  alt="Wide Range of Salon Services"
                  width={800}
                  height={533}
                /> */}
                <div className="bg-color text-light p-4 start-10 mx-4 mt-70 wow fadeInDown" style={{ position: 'sticky', zIndex: 1 }}>
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div
                        className="de_count fs-15 wow fadeInRight"
                        data-wow-delay=".2s"
                      >
                        <h3 className="fs-60">
                          <CountUp
                            end={60}
                            duration={4}
                            enableScrollSpy
                            scrollSpyOnce
                          />
                          +
                        </h3>
                        Services Offered
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">
                        From classic haircuts and beard trims to advanced hair
                        treatments and relaxing facials, we offer a complete
                        grooming experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-single"></div>
      </section>

      {/* <section className="no-top no-bottom section-dark" aria-label="section">
        <div 
          className="d-block hover" 
          onClick={() => setOpen(true)}
          style={{ cursor: 'pointer' }}
        >
          <div className="relative overflow-hidden">
            <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
              <div className="player wow scaleIn"><span></span></div>
            </div>
            <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
            <Image 
              src="/images/the_salon_company/video thumbnail.JPG" 
              layout="fill"
              objectFit="cover"
              alt="Promotional Video Thumbnail" 
            />
          </div>
        </div>
      </section>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          {
            type: "youtube",
            videoId: "C6rf51uHWJg",
          },
        ]}
      /> */}
    </>
  );
};

export default FacilitiesSection;
