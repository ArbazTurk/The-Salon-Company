import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-12">
            <div className="d-lg-flex align-items-center justify-content-between text-center">
              <div>
                <h3 className="fs-20">Address</h3>
                742 Evergreen Terrace<br />
                Brooklyn, NY 11201
              </div>
              <div>
                {/* Use Link component for the logo to navigate home */}
                <Link href="/">
                    <img src="/images/logo-white.webp" className="w-200px" alt="Almaris Hotel Logo" />
                </Link>
                <br />
                <div className="social-icons mb-sm-30 mt-4">
                  {/* Standard <a> tags are correct here as they are external links */}
                  <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
              <div>
                <h3 className="fs-20">Contact Us</h3>
                T. +929 333 9296<br />
                M. contact@almaris.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright 2025 - Almaris by Designesia
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}