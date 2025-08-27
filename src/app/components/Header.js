// "use client";
// import { usePathname } from "next/navigation";
// import { useEffect, useState } from "react";

// export default function Header() {
//   const pathname = usePathname();
//   const [activeLink, setActiveLink] = useState("");
  
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     setActiveLink(pathname);
//   }, [pathname]);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <header
//       className={`transparent has-topbar clone ${
//         isScrolled ? "scrollOn" : "scrollOff"
//       }`}
//     >
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12">
//             <div className="de-flex sm-pt10">
//               {/* Logo */}
//               <div className="de-flex-col">
//                 <div id="logo">
//                   <a href="/">
//                     <img
//                       className="logo-main"
//                       src="/images/The_Salon_Company_Logo_White.png"
//                       alt="Logo"
//                     />
//                     <img
//                       className="logo-scroll"
//                       src="/images/The_Salon_Company_Logo_White.png"
//                       alt="Logo Scroll"
//                     />
//                     <img
//                       className="logo-mobile"
//                       src="/images/The_Salon_Company_Logo_White.png"
//                       alt="Logo Mobile"
//                     />
//                   </a>
//                 </div>
//               </div>

//               {/* Navigation Menu */}
//               <div className="de-flex-col header-col-mid">
//                 <ul id="mainmenu">
//                   <li>
//                     <a
//                       className={`menu-item ${
//                         activeLink === "/" ? "active" : ""
//                       }`}
//                       href="/"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={`menu-item ${
//                         activeLink === "/services" ? "active" : ""
//                       }`}
//                       href="/services"
//                     >
//                       Services
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={`menu-item ${
//                         activeLink === "/aboutus" ? "active" : ""
//                       }`}
//                       href="/aboutus"
//                     >
//                       About Us
//                     </a>
//                   </li>
//                   <li>
//                     <a
//                       className={`menu-item ${
//                         activeLink === "/contactus" ? "active" : ""
//                       }`}
//                       href="/contactus"
//                     >
//                       Contact Us
//                     </a>
//                   </li>
//                 </ul>
//               </div>

//               {/* Reservation Button */}
//               <div className="de-flex-col">
//                 <div className="menu_side_area">
//                   <a href="/reservation" className="btn-main btn-line">
//                     Reservation
//                   </a>
//                   <span id="menu-btn"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";
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

  // Enhanced scroll behavior for desired navbar behavior
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    const backgroundChangeThreshold = 50; // When to add background
    const hideNavbarThreshold = 200; // When to hide navbar when scrolling down (past hero)

    setScrollY(currentScrollY);
    setLastScrollY(currentScrollY);

    // Handle scroll-based background changes (transparent to solid background)
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

    // Handle navbar hide/show behavior
    // Hide navbar when scrolling down past hero section, show when scrolling up
    if (currentScrollY > lastScrollY && currentScrollY > hideNavbarThreshold) {
      setIsScrollingDown(true);
    } else {
      setIsScrollingDown(false);
    }

    // Handle header clone for sticky behavior
    if (currentScrollY >= backgroundChangeThreshold && !hasClone) {
      setHasClone(true);
    } else if (currentScrollY < backgroundChangeThreshold && hasClone) {
      setHasClone(false);
    }
  }, [scrollY, lastScrollY, windowWidth, isSmaller, hasClone]);

  // Add scroll listener on mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Handle resize and update window size
  useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newHeight = window.innerHeight;

      setWindowWidth(newWidth);
      setWindowHeight(newHeight);

      // Close mobile menu on desktop
      if (newWidth > 993 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Handle header smaller class for desktop
      if (newWidth < 993) {
        setIsSmaller(false);
      }
    };

    handleResize(); // initialize on mount

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  // Initialize header on mount
  useEffect(() => {
    // Add menu arrows for mobile submenus
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

    // Set initial header height
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
    setIsMobileMenuOpen(prev => !prev);
  }, []);

  const isMobile = windowWidth <= 993;

  // Build header classes for desired behavior - visible from start
  const headerClasses = [
    "transparent",
    "has-topbar",
    isMobileMenuOpen ? "menu-open" : "",
    isScrolled ? "scrollOn" : "scrollOff",
    isScrollingDown ? "nav-up" : "",
    isMobile ? "header-mobile" : "",
    isSmaller ? "smaller" : "",
    hasClone ? "clone" : ""
  ].filter(Boolean).join(" ");

  const headerStyles =
    isMobileMenuOpen && isMobile ? { height: `${windowHeight}px` } : {};

  return (
    <header ref={headerRef} className={headerClasses} style={headerStyles}>
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
