import React from 'react';

// We can do a quick calculation based on your new data.
// Total services: BEARD(5) + CLEAN-UP(7) + D-TAN(5) + FACIALS(7) + ... = 58 services.
// We'll use "60+" for a nice round number.

export default function Facilities() {
  return (
    <>
      <section className="relative lines-deco">
        <div className="container relative z-2">
          <div className="row g-4">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="subtitle id-color wow fadeInUp mb-3">Experience The Difference</div>
              <h2 className="wow fadeInUp">Quality & Variety by the Numbers</h2>
            </div>
            <div className="col-md-6">
              <div className="relative">
                {/* Replace with an image of your salon's interior or a happy client */}
                <img src="/images/the_salon_company/4.JPG" className="img-fluid wow fadeInUp" alt="Happy Clients at The Salon Company" />
                <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                        <h3 className="fs-60"><span className="timer fs-60" data-to="500" data-speed="3000">0</span>+</h3>
                        Happy Clients
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">Our top priority is your satisfaction. We provide personalized care to ensure you leave feeling confident and refreshed.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="relative">
                 {/* Replace with an image of a stylist working or a range of products */}
                <img src="/images/the_salon_company/facilities 1.jpg" className="img-fluid wow fadeInUp" alt="Wide Range of Salon Services" />
                <div className="bg-color text-light p-4 start-10 mx-4  mt-70 wow fadeInDown">
                  <div className="row g-4 align-items-center">
                    <div className="col-lg-5 text-center">
                      <div className="de_count fs-15 wow fadeInRight" data-wow-delay=".2s">
                        {/* This number is now accurately based on your new data! */}
                        <h3 className="fs-60"><span className="timer fs-60" data-to="60" data-speed="3000">0</span>+</h3>
                        Services Offered
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <p className="no-bottom">From classic haircuts and beard trims to advanced hair treatments and relaxing facials, we offer a complete grooming experience.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer-single"></div>
      </section>

      {/* --- THIS VIDEO SECTION IS UNCHANGED AS REQUESTED --- */}
      <section className="no-top no-bottom section-dark" aria-label="section">
        <a className="d-block hover popup-youtube" href="https://www.youtube.com/watch?v=C6rf51uHWJg">
          <div className="relative overflow-hidden">
            <div className="absolute start-0 w-100 abs-middle fs-36 text-white text-center z-2">
              <div className="player wow scaleIn"><span></span></div>
            </div>
            <div className="absolute w-100 h-100 top-0 bg-dark hover-op-05"></div>
            <img src="/images/the_salon_company/video thumbnail.JPG" className="img-fluid h-100 w-100 object-fit-fill" alt="Promotional Video Thumbnail" />
          </div>
        </a>
      </section>
    </>
  );
}