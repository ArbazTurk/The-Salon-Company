'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('loading');
    
    // Asli project mein, aap yahan API call karenge.
    console.log("Form data submitted:", formData);

    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <ParallaxProvider>
      <div>
        <Header />
        <div className="no-bottom no-top" id="content">
          <div id="top"></div>

          <section id="subheader" className="relative text-light overflow-hidden">
            <div className="parallax-bg-container">
              <Parallax speed={-20} className="parallax-img-wrapper">
                <Image
                  src="/images/the_salon_company/7.JPG"
                  fill
                  className='object-fit-cover'
                  alt="Contact Us Background"
                  priority
                />
              </Parallax>
            </div>
            
            <div className="container relative z-index-1000">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1>Get In Touch</h1>
                  <p className="lead mt-3">
                    Whether you have a question about our haircuts, facials, or any other service, our team is ready to assist. Contact us to schedule your next appointment or consultation.
                  </p>
                  <ul className="crumb">
                    <li><Link href="/">Home</Link></li>
                    <li className="active">Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="de-overlay"></div>
          </section>

          <section className="relative lines-deco">
            <div className="container">
              <div className="row g-4 justify-content-center">
                <div className="col-lg-7">
                  <form name="contactForm" id="contact_form" className="position-relative z1000" onSubmit={handleSubmit}>
                    <div id="contact_form_wrap" className="row gx-4">
                      <div className="col-lg-12">
                        <div className="text-center">
                          <h3 className="mb-4">Write a Message</h3>
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6 mb10">
                        <div className="field-set">
                          <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
                        </div>
                        <div className="field-set">
                          <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
                        </div>
                        <div className="field-set">
                          <input type="text" name="phone" id="phone" className="form-control" placeholder="Your Phone" required value={formData.phone} onChange={handleInputChange} />
                        </div>
                      </div>
                      
                      <div className="col-lg-6 col-md-6">
                        <div className="field-set mb20">
                          <textarea name="message" id="message" className="form-control" placeholder="Your Message" required value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <div className="text-center">
                          <input type='submit' id='send_message' value='Send Message' className="btn-main" disabled={formStatus === 'loading'} />
                        </div>
                      </div>
                    </div>

                    {formStatus === 'success' && (
                      <div id="success_message" className='success' style={{display: 'block', marginTop: '20px'}}>
                        Your message has been sent successfully. We will get back to you shortly.
                      </div>
                    )}

                    {formStatus === 'error' && (
                      <div id="error_message" className='error' style={{display: 'block', marginTop: '20px'}}>
                        Sorry, there was an error sending your form. Please try again later.
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};