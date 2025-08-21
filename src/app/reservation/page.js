'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ReservationPage() {
  // Data for our services dropdown
  const servicesData = [
    { value: 'Lip Blushing', text: 'Permanent Makeup - Lip Blushing', image: '/images/services/lokaci services lip blusing.jpg' },
    { value: 'Microblading', text: 'Permanent Makeup - Microblading', image: '/images/services/lokaci services microblading.jpg' },
    { value: 'Eyeliner Tattoo', text: 'Permanent Makeup - Eyeliner Tattoo', image: '/images/services/lokaci services eyeliner tattoo.jpg' },
    { value: 'Luxury Facial', text: 'Beauty Treatments - Luxury Facial', image: '/images/services/lokaci services luxury facial.jpg' },
    { value: 'Eyebrow Lamination', text: 'Beauty Treatments - Eyebrow Lamination', image: '/images/services/lokaci services eyebrow lamination.jpg' },
    { value: 'BB Glow', text: 'Beauty Treatments - BB Glow', image: '/images/services/lokaci services bb glow.jpeg' },
    { value: 'Eyelash Extensions', text: 'Eyelash Extensions', image: '/images/services/lokaci services eyelash extensions.jpeg' },
    // { value: 'Classic Lashes', text: 'Eyelash Extensions - Classic', image: '/images/services/lokaci services classic lashes.jpg' },
    // { value: 'Hybrid Lashes', text: 'Eyelash Extensions - Hybrid', image: '/images/services/lokaci services hybrid lashes.jpg' },
    // { value: 'Volume Lashes', text: 'Eyelash Extensions - Volume', image: '/images/services/lokaci services volume lashes.jpg' },
  ];

  // State to manage the form inputs
  const [formData, setFormData] = useState({
    date: '',
    service: servicesData[0].value, // Default to the first service
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State to manage the form's submission status
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  // Re-initialize jQuery plugins when the component mounts
  // useEffect(() => {
  //   // A small delay to ensure all scripts from layout.js are loaded
  //   const timer = setTimeout(() => {
  //     if (window.jQuery) {
  //       // Initialize the date picker
  //       window.jQuery('#date-picker').datepicker({
  //           dateFormat: "mm/dd/yy",
  //           minDate: 0 // Cannot select past dates
  //       });
  //     }
  //   }, 100);

  //   return () => clearTimeout(timer);
  // }, []);


  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  // Special handler for the date picker as it might not trigger onChange correctly
  // useEffect(() => {
  //     if(window.jQuery) {
  //         window.jQuery('#date-picker').on('change', function() {
  //             setFormData(prevState => ({ ...prevState, date: this.value }));
  //         });
  //     }
  //     return () => {
  //         if(window.jQuery) {
  //             window.jQuery('#date-picker').off('change');
  //         }
  //     }
  // }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log("Appointment request submitted:", formData);

    // In a real app, you would send this data to an API endpoint
    // For now, we simulate a successful submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        <section id="subheader" className="relative jarallax text-light">
          <img src="/images/background/3.webp" className="jarallax-img" alt="" />
          <div className="container relative z-index-1000">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Book an Appointment</h1>
                <p className="mt-3 lead">Ready to embrace your most exquisite self? Book your appointment now and step into a sanctuary of pure, luxurious renewal. Your transformation is just a click away.</p>
                <ul className="crumb">
                  <li><Link href="/">Home</Link></li>
                  <li className="active">Book an Appointment</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="de-overlay"></div>
        </section>

        <section id="section_form" className="relative lines-deco">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3">
                
                {formStatus === 'success' ? (
                  <div id="success_message" className="text-center">
                    <h2>Your appointment request has been sent!</h2>
                    <div className="col-lg-8 offset-lg-2">
                      <p>Thank you! We will contact you shortly to confirm your booking. You can now close this page or make another appointment.</p>
                      <img src="/images/misc/salon-success.jpg" className="w-100 rounded-up-100" alt="Successful Booking" />
                    </div>
                  </div>
                ) : (
                  <div id="booking_form_wrap">
                    <form name="contactForm" id='booking_form' className="form-border" onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-12">
                          <h4 className="id-color">Choose Date & Time</h4>                                        
                          <input type="text" id="date-picker" className="form-control mb-4" name="date" autoComplete="off" placeholder="Click to select a date" required />
                        </div>
                      </div>

                      <div className="select-room">
                        <h4 className="id-color">Select a Service</h4>
                        <select className="service-type form-control" name="service_type" value={formData.service} onChange={handleInputChange}>
                          {servicesData.map(service => (
                            <option key={service.value} value={service.value} data-src={service.image}>{service.text}</option>
                          ))}
                        </select>
                      </div>

                      <div id="step-2" className="row g-4">
                        <h4 className="id-color">Enter Your Details</h4>
                        <div className="col-md-6 mt-0">
                          <div>
                            <input type='text' name='name' id='name' className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
                          </div>
                          <div>
                            <input type='email' name='email' id='email' className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
                          </div>
                          <div>
                            <input type='text' name='phone' id='phone' className="form-control" placeholder="Your Phone" required value={formData.phone} onChange={handleInputChange} />
                          </div>
                        </div>
                        <div className="col-md-6 mt-0">
                          <textarea name='message' id='message' className="form-control" placeholder="Any special requests or questions?" value={formData.message} onChange={handleInputChange}></textarea>
                        </div>
                        <div className="col-md-12">
                          <p id='submit'>
                            <input type='submit' id='send_message' value={formStatus === 'submitting' ? 'Sending...' : 'Request Appointment'} className="btn-main" disabled={formStatus === 'submitting'} />
                          </p>
                        </div>
                      </div>
                    </form>

                    {formStatus === 'error' && 
                        <div id='error_message' className='error'>Sorry, an error occurred. Please try again.</div>
                    }
                  </div>
                )}

              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}