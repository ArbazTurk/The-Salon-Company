"use client";
import Link from "next/link";
// import Link from "./LegacyLink";
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
                  <Link href="/">
                    <img
                      className="logo-main"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo"
                    />
                    <img
                      className="logo-scroll"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo Scroll"
                    />
                    <img
                      className="logo-mobile"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo Mobile"
                    />
                  </Link>
                </div>
              </div>

              {/* Navigation Menu */}
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li>
                    <Link
                      className={`menu-item ${
                        activeLink === "/" ? "active" : ""
                      }`}
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        activeLink === "/services" ? "active" : ""
                      }`}
                      href="/services"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        activeLink === "/aboutus" ? "active" : ""
                      }`}
                      href="/aboutus"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className={`menu-item ${
                        activeLink === "/contactus" ? "active" : ""
                      }`}
                      href="/contactus"
                    >
                      Contact Us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      className={`menu-item ${
                        activeLink === "/blog" ? "active" : ""
                      }`}
                      href="/blog"
                    >
                      Blogs
                    </Link>
                  </li> */}
                </ul>
              </div>

              {/* Reservation Button */}
              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/reservation" className="btn-main btn-line">
                    Reservation
                  </Link>
                  <span id="menu-btn"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
