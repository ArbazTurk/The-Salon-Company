import React from 'react';
import Link from 'next/link';

export default function Facilities() {
  return (
    <>
      <section className="relative lines-deco">
        <div className="container relative z-2">
          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="subtitle id-color wow fadeInUp mb-3">Rooms &amp; Suites</div>
              <h2 className="wow fadeInUp">Our Facilites</h2>
            </div>
            <div className="col-md-6">
              <div className="relative">
                <img src="/images/misc/7.webp" className="img-fluid wow fadeInUp" alt="Hotel Interior" />
                <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                        {/* The counter animation is handled by a global script */}
                        <h3 className="fs-60"><span className="timer fs-60" data-to="120" data-speed="3000">0</span>+</h3>
                        Rooms Available
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea velit deserunt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="relative">
                <img src="/images/misc/8.webp" className="img-fluid wow fadeInUp" alt="Hotel Dining" />
                <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                         {/* The counter animation is handled by a global script */}
                        <h3 className="fs-60"><span className="timer fs-60" data-to="105" data-speed="3000">0</span>+</h3>
                        Menu Selection
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">Officia ullamco quis sunt adipisicing occaecat eiusmod ea ea velit deserunt.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-single"></div>
      </section>

      <section className="no-top no-bottom section-dark" aria-label="section">
        {/* This is an external link, so a standard <a> tag is correct.
            The 'popup-youtube' class will be picked up by the global JS to open the lightbox. */}
        <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=C6rf51uHWJg">
          <div className="relative overflow-hidden">
            <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
              <div className="player wow scaleIn"><span></span></div>
            </div>
            <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
            <img src="/images/video thumbnail.jpg" className="img-fluid" alt="Promotional Video Thumbnail" />
          </div>
        </a>
      </section>
    </>
  );
}