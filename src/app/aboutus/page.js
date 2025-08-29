"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import CountUp from "react-countup";
import Header from "../components/Header";
import Footer from "../components/Footer";
import InstagramFeed from "../components/InstagramFeed";

import "animate.css";

export default function AboutPage() {
  useEffect(() => {
    import("wowjs").then((WOW) => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  const salonFeatures = [
    {
      icon: "/images/icons/hygiene.png",
      title: "Impeccable Hygiene",
      text: "Your health and safety are paramount. We adhere to the highest standards of sanitation and use sterilized equipment.",
    },
    {
      icon: "/images/icons/pigment.png",
      title: "Premium Brands",
      text: "We use trusted, industry-leading products like O3+, Casmara, and Inoa to deliver exceptional quality.",
    },
    {
      icon: "/images/icons/consult.png",
      title: "Personalized Consultation",
      text: "Every service begins with understanding your needs to ensure results that perfectly match your style.",
    },
    {
      icon: "/images/icons/certified.png",
      title: "Certified Stylists",
      text: "Our team is comprised of highly trained and certified professionals, true masters of their craft.",
    },
    {
      icon: "/images/icons/ambiance.png",
      title: "Relaxing Ambiance",
      text: "Our salon is designed to be a sanctuary of calm, making every visit a tranquil and rejuvenating escape.",
    },
    {
      icon: "/images/icons/results.png",
      title: "Guaranteed Satisfaction",
      text: "We are dedicated to the art of perfection, ensuring you leave our salon feeling confident and looking your best.",
    },
  ];

  return (
    <ParallaxProvider>
      <div>
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          {/* Subheader section with Parallax */}
          <section
            id="subheader"
            className="relative text-light overflow-hidden"
          >
            <div className="parallax-bg-container">
              <Parallax speed={-20} className="parallax-img-wrapper">
                <Image
                  src="/images/the_salon_company/7.JPG"
                  fill
                  className="object-fit-cover"
                  alt="About Us Background"
                  priority
                />
              </Parallax>
            </div>
            <div className="container relative z-index-1000">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h1 className="heading-small">About Us</h1>
                  <ul className="crumb">
                    <li>
                      <Link href="/">Home</Link>
                    </li>
                    <li className="active">About Us</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="de-overlay"></div>
          </section>

          {/* Our Story Section */}
          <section className="relative lines-deco">
            <div className="container">
              <div className="row gx-5 align-items-center">
                <div className="col-lg-6">
                  <div className="subtitle wow fadeInUp mb-3">Our Story</div>
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">
                    The Art of Personal Grooming
                  </h2>
                  <p>
                    The Salon Company was founded on a simple promise: to offer
                    a sanctuary where classic grooming and modern style
                    converge. We provide a complete range of services, from
                    precision haircuts and traditional shaves to advanced
                    facials and therapeutic hair treatments.
                  </p>
                  <p>
                    Our skilled stylists and therapists are dedicated to the
                    craft of making you look and feel your absolute best. Each
                    service is tailored to your individual needs, using only the
                    finest products. At The Salon Company, every visit is an
                    invitation to invest in yourself, indulging in a moment of
                    pure, confidence-boosting renewal.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-6">
                      <Image
                        src="/images/lokaci image 5.webp"
                        width={600}
                        height={400}
                        className="img-fluid mb-4 wow zoomIn"
                        alt="Salon Interior"
                      />
                      <div className="col-12 text-center">
                        <div className="bg-color-2 text-light p-4">
                          <div className="de_count wow fadeInUp">
                            <h2 className="mb-0">
                              <CountUp
                                end={800}
                                duration={3}
                                enableScrollSpy
                                scrollSpyOnce
                              />
                              +
                            </h2>
                            <span>Happy Clients</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="spacer-single sm-hide"></div>
                      <div className="col-12 text-center">
                        <div className="bg-color text-light p-4">
                          <div className="de_count wow fadeInUp">
                            <h2 className="mb-0">
                              <CountUp
                                end={60}
                                duration={4}
                                enableScrollSpy
                                scrollSpyOnce
                              />
                              +
                            </h2>
                            <span>Services Offered</span>
                          </div>
                        </div>
                      </div>
                      <Image
                        src="/images/lokaci image 6.webp"
                        width={600}
                        height={400}
                        className="img-fluid mt-4 wow zoomIn"
                        alt="Salon Treatment Room"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="relative lines-deco">
            <div className="container relative z-2">
              <div className="row g-4 align-items-center">
                <div className="col-lg-6">
                  <div className="ms-4">
                    <div className="subtitle wow fadeInUp mb-3">
                      Our Promise
                    </div>
                    <h2 className="wow fadeInUp mb-5">Why Choose Us?</h2>
                    <div className="row g-3">
                      {salonFeatures.map((feature, index) => (
                        <div className="col-lg-6" key={index}>
                          <div
                            className="mb-4 relative wow fadeInRight"
                            data-wow-delay={`${index * 0.1 + 0.2}s`}
                          >
                            <Image
                              src={feature.icon}
                              width={50}
                              height={50}
                              className="w-50px absolute id-color"
                              alt={`${feature.title} icon`}
                            />
                            <div className="pl-70">
                              <h5>{feature.title}</h5>
                              <p className="mb-0">{feature.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="relative">
                        <Image
                          src="/images/slider/1.jpg"
                          width={600}
                          height={400}
                          className="img-fluid wow fadeInUp"
                          alt="Artist at work"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="spacer-single sm-hide"></div>
                      <div className="relative">
                        <Image
                          src="/images/slider/2.jpg"
                          width={600}
                          height={400}
                          className="img-fluid wow fadeInUp"
                          alt="Client consultation"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <InstagramFeed />
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
