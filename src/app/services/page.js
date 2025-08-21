import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ServicesPage() {

  // We'll use the service data you provided, adding a tagline for each.
  const servicesData = [
    {
      imgSrc: "/images/services/lokaci services lip blusing 533x533.jpg",
      price: "129",
      title: "Lip Blushing",
      tagline: "A Touch of Lasting Color",
      delay: ".3s"
    },
    {
      imgSrc: "/images/services/lokaci services microblading 533x533.jpg",
      price: "129",
      title: "Microblading",
      tagline: "Perfectly Sculpted Brows",
      delay: ".4s"
    },
    {
      imgSrc: "/images/services/lokaci services eyeliner tattoo 533x533.jpg",
      price: "139",
      title: "Eyeliner Tattoo",
      tagline: "Timeless, Smudge-Proof Definition",
      delay: ".5s"
    },
    {
      imgSrc: "/images/services/lokaci services luxury facial 533x533.jpg",
      price: "149",
      title: "Luxury Facial",
      tagline: "Rejuvenate and Restore Your Skin",
      delay: ".6s"
    },
    {
      imgSrc: "/images/services/lokaci services bb glow 533x533.jpeg",
      price: "149",
      title: "BB Glow",
      tagline: "For a Flawless, Radiant Complexion",
      delay: ".7s"
    },
    {
      imgSrc: "/images/services/lokaci services eyelash extensions 533x533.jpeg",
      price: "149",
      title: "Eyelash Extensions",
      tagline: "Classic, Hybrid, & Volume Lashes",
      delay: ".8s"
    }
  ];

  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/images/background/1.webp" className="jarallax-img" alt="" />
          <div className="container relative z-index-1000">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Our Services</h1>
                <p className="mt-3 lead">Discover our range of bespoke treatments, from permanent makeup to luxury facials, all designed to enhance your natural beauty.</p>
                <ul className="crumb">
                  <li><a href="/">Home</a></li>
                  <li className="active">Our Services</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

        <section className="relative lines-deco">
          <div className="container">
            <div className="row g-4">
              {/* We map over the servicesData array to create a grid item for each service */}
              {servicesData.map((service, index) => (
                <div className="col-lg-4 col-sm-6" key={index}>
                  <div className="hover relative text-light text-center wow fadeInUp" data-wow-delay={service.delay}>
                    <img src={service.imgSrc} className="img-fluid" alt={service.title} />
                    <div className="abs hover-op-1 z-4 hover-mt-40 abs-centered">
                      <div className="fs-14">Starting From</div>
                      <h3 className="fs-40 lh-1 mb-4">${service.price}</h3>
                      {/* This link now points to the booking page */}
                      <a className="btn-line" href="/reservation">Book Now</a>
                    </div>
                    <div className="abs bg-color z-2 top-0 w-100 h-100 hover-op-1"></div>
                    <div className="abs z-2 bottom-0 mb-3 w-100 text-center hover-op-0">
                      <h3 className="mb-0">{service.title}</h3>
                      <div className="text-center fs-14">
                        <span className="mx-2">
                          {service.tagline}
                        </span>
                      </div>
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
  );
};


// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const Services = () => {
//   return (
//     <div>
//       <Header />
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
//         <section id="section-services">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="text-center">
//                   <h2>Our Services</h2>
//                   <div className="small-border"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default Services;
