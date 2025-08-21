"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  return (
    <header className="transparent has-topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              {/* Logo */}
              <div className="de-flex-col">
                <div id="logo">
                  <a href="/">
                    <img
                      className="logo-main"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo"
                    />
                    <img
                      className="logo-scroll"
                      src="/images/The_Salon_Company_Logo.png"
                      alt="Logo Scroll"
                    />
                    <img
                      className="logo-mobile"
                      src="/images/The_Salon_Company_Logo.png"
                      alt="Logo Mobile"
                    />
                  </a>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <a
                      className={`menu-item ${
                        activeLink === "/" ? "active" : ""
                      }`}
                      href="/"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeLink === "/services" ? "active" : ""
                      }`}
                      href="/services"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeLink === "/aboutus" ? "active" : ""
                      }`}
                      href="/aboutus"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className={`menu-item ${
                        activeLink === "/contactus" ? "active" : ""
                      }`}
                      href="/contactus"
                    >
                      Contact Us
                    </a>
                  </li>
                  {/* <li>
                    <a
                      className={`menu-item ${
                        activeLink === "/blog" ? "active" : ""
                      }`}
                      href="/blog"
                    >
                      Blogs
                    </a>
                  </li> */}
                </ul>
              </div>

              {/* Reservation Button */}
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <a href="/reservation" className="btn-main btn-line">
                    Reservation
                  </a>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    // <header className="transparent has-topbar">
    //   <div className="container">
    //     <div className="row">
    //       <div className="col-md-12">
    //         <div className="de-flex sm-pt10">
    //           <div className="de-flex-col">
    //             {/* logo begin */}
    //             <div id="logo">
    //               <Link href="/">
    //                 <img className="logo-main" src="/images/The_Salon_Company_Logo_White.png" alt="" />
    //                 <img className="logo-scroll" src="/images/The_Salon_Company_Logo.png" alt="" />
    //                 <img className="logo-mobile" src="/images/The_Salon_Company_Logo.png" alt="" />
    //               </Link>
    //             </div>
    //             {/* logo close */}
    //           </div>
    //           <div className="de-flex-col header-col-mid">
    //             <ul id="mainmenu">
    //               <li><Link className="menu-item" href="/">Home</Link>
    //                 <ul className="mega">
    //                   <li>
    //                     <div className="container">
    //                       <div className="sb-menu p-4">
    //                         <div className="row g-3">
    //                           <div className="col-lg-2 col-md-4 text-center">
    //                             <div className="relative hover text-center overflow-hidden rounded-5px">
    //                               <img src="/images/demo/homepage-1.webp" className="w-100 relative hover-scale-1-1" alt="" />
    //                               <div className="abs abs-centered w-70 z-2 hover-op-1">
    //                                 <Link className="btn-main mb-2" href="/">Multipage</Link>
    //                                 <Link className="btn-main" href="/onepage-homepage-main">One Page</Link>
    //                               </div>
    //                             </div>
    //                             <h5 className="mt-2 mb-0">Main Demo</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/sidebar_index">
    //                                       <img src="/images/demo/homepage-18.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0 new">Sidebar Demo</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/glamping-hotel-homepage">
    //                                       <img src="/images/demo/homepage-17.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0 new">Glamping</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-beach-resort-2">
    //                                       <img src="/images/demo/homepage-16.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0 new">Beach Resort 2</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-golf-resort-hotel">
    //                                       <img src="/images/demo/homepage-15.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Golf Resort</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-lake-side-hotel-2">
    //                                       <img src="/images/demo/homepage-14.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Lake Side 2</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-lake-side-hotel">
    //                                       <img src="/images/demo/homepage-13.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Lake Side</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-minimal">
    //                                       <img src="/images/demo/homepage-12.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Minimal</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/ski-resort-homepage">
    //                                       <img src="/images/demo/homepage-11.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Ski Resort</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-holiday">
    //                                       <img src="/images/demo/homepage-10.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Holiday</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-elegant">
    //                                       <img src="/images/demo/homepage-9.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Elegant</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-bold">
    //                                       <img src="/images/demo/homepage-7.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Bold</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-bold-2">
    //                                       <img src="/images/demo/homepage-8.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Bold 2</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <img src="/images/demo/homepage-6.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   <div className="abs abs-centered w-70 z-2 hover-op-1">
    //                                       <Link className="btn-main mb-2" href="/homepage-modern-2">Light</Link>
    //                                       <Link className="btn-main" href="/homepage-modern-2-dark">Dark</Link>
    //                                   </div>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Modern 2</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-beach-resort">
    //                                       <img src="/images/demo/homepage-3.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Beach Resort</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-city-apartment">
    //                                       <img src="/images/demo/homepage-4.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">City Apartment</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-mountain-hotel">
    //                                       <img src="/images/demo/homepage-2.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Mountain Hotel</h5>
    //                           </div>

    //                           <div className="col-lg-2 col-md-4 text-center">
    //                               <div className="relative hover text-center overflow-hidden rounded-5px">
    //                                   <Link href="/homepage-modern">
    //                                       <img src="/images/demo/homepage-5.webp" className="w-100 relative hover-scale-1-1" alt=""/>
    //                                   </Link>
    //                               </div>
    //                               <h5 className="mt-2 mb-0">Modern</h5>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li><Link className="menu-item" href="/rooms">Rooms</Link>
    //                 <ul className="mega">
    //                   <li>
    //                     <div className="container">
    //                       <div className="sb-menu p-4">
    //                         <div className="row g-3">
    //                           <div className="col-lg-3">
    //                             <h4>Rooms</h4>
    //                             <ul className="no-bg">
    //                               <li><Link href="/rooms">All Rooms Default</Link></li>
    //                               <li><Link href="/rooms-style-2">All Rooms Style 2</Link></li>
    //                               <li><Link href="/rooms-style-3">All Rooms Style 3</Link></li>
    //                               <li><Link href="/room-single">Single Room</Link></li>
    //                               <li><Link href="/room-single-style-2">Single Room Style 2</Link></li>
    //                             </ul>
    //                           </div>
    //                           <div className="col-lg-3 text-center">
    //                             <div className="relative hover text-center overflow-hidden soft-shadow rounded-5px">
    //                               <Link href="/room-single">
    //                                 <div className="d-label">
    //                                   Best Seller
    //                                 </div>
    //                                 <img src="/images/form/2.jpg" className="w-100 relative hover-scale-1-1" alt="" />
    //                               </Link>
    //                               <div className="abs w-100 h-100 start-0 top-0 hover-bg-color"></div>
    //                             </div>
    //                             <h5 className="mt-2 mb-0">Deluxe Room</h5>
    //                           </div>

    //                           <div className="col-lg-3 text-center">
    //                             <div className="relative hover text-center overflow-hidden soft-shadow rounded-5px">
    //                               <Link href="/room-single">
    //                                 <div className="d-label">
    //                                   Best Seller
    //                                 </div>
    //                                 <img src="/images/form/4.jpg" className="w-100 relative hover-scale-1-1" alt="" />
    //                               </Link>
    //                               <div className="abs w-100 h-100 start-0 top-0 hover-bg-color"></div>
    //                             </div>
    //                             <h5 className="mt-2 mb-0">Family Suite</h5>
    //                           </div>

    //                           <div className="col-lg-3 text-center">
    //                             <div className="relative hover text-center overflow-hidden soft-shadow rounded-5px">
    //                               <Link href="/room-single">
    //                                 <div className="d-label">
    //                                   Featured
    //                                 </div>
    //                                 <img src="/images/form/6.jpg" className="w-100 relative hover-scale-1-1" alt="" />
    //                               </Link>
    //                               <div className="abs w-100 h-100 start-0 top-0 hover-bg-color"></div>
    //                             </div>
    //                             <h5 className="mt-2 mb-0">Presidential Suite</h5>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </li>
    //                 </ul>
    //               </li>
    //               <li><Link className="menu-item" href="/reservation">Reservation</Link></li>
    //               <li><Link className="menu-item" href="#">Pages</Link>
    //                 <ul>
    //                   <li><Link href="/about">About Us</Link></li>
    //                   <li><Link href="/facilities">Facilities</Link></li>
    //                   <li><Link href="/special-offers">Offers</Link></li>
    //                   <li><Link href="/gallery">Gallery</Link></li>
    //                   <li><Link href="/gallery-carousel">Gallery Carousel</Link></li>
    //                 </ul>
    //               </li>
    //               <li><Link className="menu-item" href="/news">News</Link></li>
    //               <li><Link className="menu-item" href="/contact">Contact</Link></li>
    //             </ul>
    //           </div>
    //           <div className="de-flex-col">
    //             <div className="menu_side_area">
    //               <Link href="/reservation" className="btn-main btn-line">Reservation</Link>
    //               <span id="menu-btn"></span>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </header>
  );
}
