import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="text-light section-dark">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-md-12">
            <div className="d-lg-flex align-items-center justify-content-between text-center">
              <div>
                <h3 className="fs-20">Address</h3>
                GT-08, Sector 117, Noida
                <br />
                (Near Spectrum Metro)
              </div>
              <div>
                <Link href="/">
                  <Image
                    width={250}
                    height={33}
                    src="/images/The_Salon_Company_Logo_White.png"
                    className="w-250px"
                    alt="The Salon Company Logo"
                  />
                </Link>
                <br />
                <div className="social-icons mb-sm-30 mt-4">
                  <a href="#">
                    <FaFacebookF className="social-icon" />
                  </a>
                  <a href="#">
                    <FaInstagram className="social-icon" />
                  </a>
                  <a href="#">
                    <FaTwitter className="social-icon" />
                  </a>
                  <a href="#">
                    <FaYoutube className="social-icon" />
                  </a>
                  <a href="https://wa.me/918800026046">
                    <FaWhatsapp className="social-icon" />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="fs-20">Contact Us</h3>
                <a href="tel:+918800026046">
                  <FaPhone className="mb-1" /> +91 88000 26046
                </a>
                <br />
                <a href="mailto:www.lokaci.com">
                  <FaEnvelope className="mb-1 me-1" /> www.lokaci.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              Copyright 2025 - The Salon Company
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
