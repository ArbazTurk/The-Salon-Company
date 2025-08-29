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
                <Image
                  width={600}
                  height={400}
                  src="/images/the_salon_company/4.JPG"
                  className="img-fluid wow fadeInUp"
                  alt="Happy Clients at The Salon Company"
                />
                <div
                  className="bg-color text-light p-4 start-10 mx-4 mt-70 wow fadeInDown"
                  style={{ position: "sticky", zIndex: 1 }}
                >
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
                <Image
                  width={600}
                  height={400}
                  src="/images/the_salon_company/facilities 1.JPG"
                  className="img-fluid wow fadeInUp"
                  alt="Wide Range of Salon Services"
                />
                <div
                  className="bg-color text-light p-4 start-10 mx-4 mt-70 wow fadeInDown"
                  style={{ position: "sticky", zIndex: 1 }}
                >
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
    </>
  );
};

export default FacilitiesSection;
