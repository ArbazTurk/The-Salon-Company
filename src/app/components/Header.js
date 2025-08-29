"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useCallback, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [isSmaller, setIsSmaller] = useState(false);
  const [hasClone, setHasClone] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    setActiveLink(pathname);
  }, [pathname]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const backgroundChangeThreshold = 50;
    const hideNavbarThreshold = 200;

    setScrollY(currentScrollY);
    setLastScrollY(currentScrollY);

    if (currentScrollY >= backgroundChangeThreshold) {
      setIsScrolled(true);
      if (windowWidth >= 993 && !isSmaller) {
        setIsSmaller(true);
      }
    } else {
      setIsScrolled(false);
      if (isSmaller) {
        setIsSmaller(false);
      }
    }

    if (currentScrollY > lastScrollY && currentScrollY > hideNavbarThreshold) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    if (currentScrollY >= backgroundChangeThreshold && !hasClone) {
      setHasClone(true);
    } else if (currentScrollY < backgroundChangeThreshold && hasClone) {
      setHasClone(false);
    }
  }, [scrollY, lastScrollY, windowWidth, isSmaller, hasClone]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowWidth(newWidth);
      setWindowHeight(newHeight);

      if (newWidth > 993 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      if (newWidth < 993) {
        setIsSmaller(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const addMenuArrows = () => {
      const menuItems = document.querySelectorAll("#mainmenu li a");
      menuItems.forEach((item) => {
        const li = item.parentElement;
        const ul = li.querySelector("ul");

        if (ul && !li.querySelector("span")) {
          const span = document.createElement("span");
          li.appendChild(span);
        }
      });
    };

    addMenuArrows();

    if (headerRef.current) {
      const headerHeight = headerRef.current.scrollHeight;
      if (isMobileMenuOpen && windowWidth <= 993) {
        headerRef.current.style.height = `${windowHeight}px`;
      } else {
        headerRef.current.style.height = "auto";
      }
    }
  }, [isMobileMenuOpen, windowWidth, windowHeight]);

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const isMobile = windowWidth <= 993;

  const headerClasses = [
    "transparent",
    "has-topbar",
    isMobileMenuOpen ? "menu-open" : "",
    isScrolled ? "scrollOn" : "scrollOff",
    isScrollingDown ? "nav-up" : "",
    isMobile ? "header-mobile" : "",
    isSmaller ? "smaller" : "",
    hasClone ? "clone" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const headerStyles =
    isMobileMenuOpen && isMobile ? { height: `${windowHeight}px` } : {};

  return (
    <header ref={headerRef} className={headerClasses} style={headerStyles}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <Link href="/">
                    <Image
                      width={180}
                      height={80}
                      className="logo-main"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo"
                    />
                    <Image
                      width={180}
                      height={80}
                      className="logo-scroll"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo Scroll"
                    />
                    <Image
                      width={180}
                      height={80}
                      className="logo-mobile"
                      src="/images/The_Salon_Company_Logo_White.png"
                      alt="Logo Mobile"
                    />
                  </Link>
                </div>
              </div>

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
                  <li className="d-lg-none">
                    <Link
                      className={`menu-item ${
                        activeLink === "/reservation" ? "active" : ""
                      }`}
                      href="/reservation"
                    >
                      Reservation
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="de-flex-col">
                <div className="menu_side_area">
                  <Link href="/reservation" className="btn-main btn-line">
                    Reservation
                  </Link>
                  <span
                    id="menu-btn"
                    className={isMobileMenuOpen ? "menu-open" : ""}
                    onClick={toggleMobileMenu}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
