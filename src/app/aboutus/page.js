// 'use client';

// import React from 'react';
// import Link from 'next/link';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import InstagramFeed from '../components/InstagramFeed';

// export default function AboutPage() {
  
//   // const teamData = [
//   //   { name: 'Sophia Jenkins', role: 'Lead PMU Artist', img: '/images/team/1.webp' },
//   //   { name: 'Ethan Reynolds', role: 'Master Stylist', img: '/images/team/2.webp' },
//   //   { name: 'Chloe Davis', role: 'Lead Aesthetician', img: '/images/team/3.webp' },
//   //   { name: 'Noah Anderson', role: 'Nail Art Specialist', img: '/images/team/4.webp' }
//   // ];

//   const salonFeatures = [
//     { icon: '/images/icons/hygiene.png', title: 'Sterilized Equipment', text: 'Your safety is our priority. We use medically sterilized, single-use equipment.' },
//     { icon: '/images/icons/pigment.png', title: 'Premium Pigments', text: 'We use the highest quality, vegan-friendly pigments for beautiful, lasting results.' },
//     { icon: '/images/icons/consult.png', title: 'Personalized Consultation', text: 'Every treatment begins with a thorough consultation to match your unique style.' },
//     { icon: '/images/icons/certified.png', title: 'Certified Artists', text: 'Our team consists of highly trained and certified professionals in their fields.' },
//     { icon: '/images/icons/ambiance.png', title: 'Relaxing Ambiance', text: 'Our studio is designed to be a sanctuary of calm, making your visit a tranquil escape.' },
//     { icon: '/images/icons/results.png', title: 'Flawless Results', text: 'We are dedicated to the art of perfection, ensuring you leave feeling confident.' }
//   ];

//   return (
//     <div>
//       <Header />
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section id="subheader" className="relative jarallax text-light">
//           <img src="/images/the_salon_company/7.JPG" className="jarallax-img" alt="" />
//           <div className="container relative z-index-1000">
//             <div className="row justify-content-center">
//               <div className="col-lg-12 text-center">
//                 <h1>About Us</h1>
//                 <ul className="crumb">
//                   <li><Link href="/">Home</Link></li>
//                   <li className="active">About Us</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="de-overlay"></div>
//         </section>

//         <section className="relative lines-deco">
//           <div className="container">
//             <div className="row gx-5 align-items-center">
//               <div className="col-lg-6">
//                 <div className="subtitle wow fadeInUp mb-3">Our Story</div>
//                 <h2 className="wow fadeInUp" data-wow-delay=".2s">A Sanctuary of Exquisite Beauty</h2>
//                 <p>The Salon Company beckons with a promise of exquisite beauty, offering a sanctuary where natural radiance is amplified and refined. Here, the art of permanent makeup transforms features with subtle precision, while luxurious treatments revitalize the skin and spirit.</p>
//                 <p>Beyond the artistry, our skilled therapists curate bespoke facials, massages, and body treatments, each tailored to rejuvenate and restore. At The Salon Company, every touch is an invitation to embrace your most exquisite self, indulging in a moment of pure, luxurious renewal.</p>
//               </div>

//               <div className="col-lg-6">
//                 <div className="row g-4">
//                   <div className="col-6">
//                     <img src="/images/lokaci image 5.webp" className="img-fluid mb-4 wow zoomIn" alt="Salon Interior" />
//                     <div className="col-12 text-center">
//                       <div className="bg-color-2 text-light p-4">
//                         <div className="de_count wow fadeInUp">
//                           <h2 className="mb-0"><span className="timer" data-to="500" data-speed="3000">0</span>+</h2>
//                           <span>Happy Clients</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-6">
//                     <div className="spacer-single sm-hide"></div>
//                     <div className="col-12 text-center">
//                       <div className="bg-color text-light p-4">
//                         <div className="de_count wow fadeInUp">
//                           <h2 className="mb-0"><span className="timer" data-to="20" data-speed="3000">0</span>+</h2>
//                           <span>Luxury Services</span>
//                         </div>
//                       </div>
//                     </div>
//                     <img src="/images/lokaci image 6.webp" className="img-fluid mt-4 wow zoomIn" alt="Salon Treatment Room" />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* <section className="bg-light lines-deco">
//           <div className="container">
//             <div className="row g-4">
//               <div className="col-lg-12 text-center">
//                 <div className="subtitle wow fadeInUp mb-3">Behind the Artistry</div>
//                 <h2 className="wow fadeInUp mb-0" data-wow-delay=".2s">Meet Our Team</h2>
//               </div>
//               {teamData.map((member, index) => (
//                 <div className="col-lg-3" key={index}>
//                   <img src={member.img} className="img-fluid" alt={member.name} />
//                   <div className="p-3 text-center">
//                     <h4 className="mb-0">{member.name}</h4>
//                     <p className="mb-2">{member.role}</p>
//                     <div className="social-icons">
//                       <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-facebook-f"></i></a>
//                       <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-twitter"></i></a>
//                       <a href="#"><i className="bg-white id-color bg-hover-2 text-hover-white fa-brands fa-instagram"></i></a>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section> */}

//         <section className="relative lines-deco">
//           <div className="container relative z-2">
//             <div className="row g-4 align-items-center">
//               <div className="col-lg-6">
//                 <div className="ms-4">
//                   <div className="subtitle wow fadeInUp mb-3">Our Promise</div>
//                   <h2 className="wow fadeInUp mb-5">Why Choose Us?</h2>
//                   <div className="row g-3">
//                     {salonFeatures.map((feature, index) => (
//                       <div className="col-lg-6" key={index}>
//                         <div className="mb-4 relative wow fadeInRight" data-wow-delay={`${(index * 0.1) + 0.2}s`}>
//                           <img src={feature.icon} className="w-50px absolute id-color" alt="" />
//                           <div className="pl-70">
//                             <h5>{feature.title}</h5>
//                             <p className="mb-0">{feature.text}</p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               <div className="col-lg-6">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="relative">
//                       <img src="/images/slider/1.jpg" className="img-fluid wow fadeInUp" alt="Artist at work" />
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <div className="spacer-single sm-hide"></div>
//                     <div className="relative">
//                       <img src="/images/slider/2.jpg" className="img-fluid wow fadeInUp" alt="Client consultation" />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
        
//         {/* Re-using the InstagramFeed component we already have */}
//         <InstagramFeed />
//       </div>
//       <Footer />
//     </div>
//   );
// }


'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import CountUp from 'react-countup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstagramFeed from '../components/InstagramFeed';

import 'animate.css';

export default function AboutPage() {
  useEffect(() => {
    import('wowjs').then(WOW => {
      new WOW.default.WOW({
        live: false,
      }).init();
    });
  }, []);

  const salonFeatures = [
    { icon: '/images/icons/hygiene.png', title: 'Sterilized Equipment', text: 'Your safety is our priority. We use medically sterilized, single-use equipment.' },
    { icon: '/images/icons/pigment.png', title: 'Premium Pigments', text: 'We use the highest quality, vegan-friendly pigments for beautiful, lasting results.' },
    { icon: '/images/icons/consult.png', title: 'Personalized Consultation', text: 'Every treatment begins with a thorough consultation to match your unique style.' },
    { icon: '/images/icons/certified.png', title: 'Certified Artists', text: 'Our team consists of highly trained and certified professionals in their fields.' },
    { icon: '/images/icons/ambiance.png', title: 'Relaxing Ambiance', text: 'Our studio is designed to be a sanctuary of calm, making your visit a tranquil escape.' },
    { icon: '/images/icons/results.png', title: 'Flawless Results', text: 'We are dedicated to the art of perfection, ensuring you leave feeling confident.' }
  ];

  return (
    <ParallaxProvider>
      <div>
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          {/* Subheader section with Parallax */}
          <section id="subheader" className="relative text-light overflow-hidden">
            <div className="parallax-bg-container">
              <Parallax speed={-20} className="parallax-img-wrapper">
                <Image
                  src="/images/the_salon_company/7.JPG"
                  layout="fill"
                  objectFit="cover"
                  alt="About Us Background"
                  priority
                />
              </Parallax>
            </div>
            <div className="container relative z-index-1000">
              <div className="row justify-content-center">
                <div className="col-lg-12 text-center">
                  <h1>About Us</h1>
                  <ul className="crumb">
                    <li><Link href="/">Home</Link></li>
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
                  <h2 className="wow fadeInUp" data-wow-delay=".2s">A Sanctuary of Exquisite Beauty</h2>
                  <p>The Salon Company beckons with a promise of exquisite beauty, offering a sanctuary where natural radiance is amplified and refined. Here, the art of permanent makeup transforms features with subtle precision, while luxurious treatments revitalize the skin and spirit.</p>
                  <p>Beyond the artistry, our skilled therapists curate bespoke facials, massages, and body treatments, each tailored to rejuvenate and restore. At The Salon Company, every touch is an invitation to embrace your most exquisite self, indulging in a moment of pure, luxurious renewal.</p>
                </div>
                <div className="col-lg-6">
                  <div className="row g-4">
                    <div className="col-6">
                      <Image 
                        src="/images/lokaci image 5.webp" 
                        width={500} height={750} 
                        className="img-fluid mb-4 wow zoomIn" 
                        alt="Salon Interior" 
                      />
                      <div className="col-12 text-center">
                        <div className="bg-color-2 text-light p-4">
                          <div className="de_count wow fadeInUp">
                            <h2 className="mb-0">
                              <CountUp end={500} duration={3} enableScrollSpy scrollSpyOnce />+
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
                              <CountUp end={20} duration={3} enableScrollSpy scrollSpyOnce />+
                            </h2>
                            <span>Luxury Services</span>
                          </div>
                        </div>
                      </div>
                      <Image 
                        src="/images/lokaci image 6.webp" 
                        width={500} height={750} 
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
                    <div className="subtitle wow fadeInUp mb-3">Our Promise</div>
                    <h2 className="wow fadeInUp mb-5">Why Choose Us?</h2>
                    <div className="row g-3">
                      {salonFeatures.map((feature, index) => (
                        <div className="col-lg-6" key={index}>
                          <div className="mb-4 relative wow fadeInRight" data-wow-delay={`${(index * 0.1) + 0.2}s`}>
                            <Image 
                              src={feature.icon} 
                              width={50} height={50} 
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
                          width={500} height={750} 
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
                          width={500} height={750} 
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