// 'use client';
// import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { allServicesData } from '../services.js';

// export default function ReservationPage() {
//   // Determine the default service for initial form state
//   const firstCategory = Object.keys(allServicesData)[0];
//   const defaultService = allServicesData[firstCategory][0].service;

//   const [formData, setFormData] = useState({
//     date: '',
//     service: defaultService,
//     name: '',
//     email: '',
//     phone: '',
//     message: ''
//   });

//   const [formStatus, setFormStatus] = useState('idle');
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       if (window.jQuery && window.jQuery.fn.datepicker) {
//         // Initialize the original date picker with its specific options
//         window.jQuery('#date-picker').datepicker({
//             dateFormat: "mm/dd/yy",
//             minDate: 0 // Cannot select past dates
//         });

//         // Add a listener to update React state when the date changes
//         window.jQuery('#date-picker').on('change', function() {
//             setFormData(prevState => ({ ...prevState, date: this.value }));
//         });
//       }
//     }, 100);

//     // Cleanup function to prevent memory leaks
//     return () => {
//         clearTimeout(timer);
//         if (window.jQuery) {
//             // Important to remove the picker and the event listener
//             window.jQuery('#date-picker').datepicker('destroy');
//             window.jQuery('#date-picker').off('change');
//         }
//     };
//   }, []); // Empty array ensures this runs only once on mount

//   const handleInputChange = (e) => {
//     const { id, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [id]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus('submitting');
//     console.log("Appointment request submitted:", formData);

//     setTimeout(() => {
//       setFormStatus('success');
//     }, 1500);
//   };

//   return (
//     <div>
//       <Header />
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>

//         <section id="subheader" className="relative jarallax text-light">
//           <img src="/images/the_salon_company/7.JPG" className="jarallax-img" alt="" />
//           <div className="container relative z-index-1000">
//             <div className="row justify-content-center">
//               <div className="col-lg-6 text-center">
//                 <h1>Book an Appointment</h1>
//                 <p className="mt-3 lead">Ready to embrace your most exquisite self? Book your appointment now and step into a sanctuary of pure, luxurious renewal.</p>
//                 <ul className="crumb">
//                   <li><Link href="/">Home</Link></li>
//                   <li className="active">Book an Appointment</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div className="de-overlay"></div>
//         </section>

//         <section id="section_form" className="relative lines-deco">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 offset-lg-3">
                
//                 {formStatus === 'success' ? (
//                   <div id="success_message" className="text-center">
//                     <h2>Your appointment request has been sent!</h2>
//                     <div className="col-lg-8 offset-lg-2">
//                       <p>Thank you! We will contact you shortly to confirm your booking.</p>
//                       <img src="/images/misc/salon-success.jpg" className="w-100 rounded-up-100" alt="Successful Booking" />
//                     </div>
//                   </div>
//                 ) : (
//                   <div id="booking_form_wrap">
//                     <form name="bookingForm" id='booking_form' className="form-border" onSubmit={handleSubmit}>
//                       <div className="row">
//                         <div className="col-md-12">
//                           <h4>Choose a Preferred Date</h4>
//                           {/* --- ORIGINAL DATE PICKER INPUT --- */}
//                           <input 
//                             type="text" 
//                             id="date-picker" 
//                             className="form-control mb-4" 
//                             name="date" 
//                             autoComplete="off" 
//                             placeholder="Click to select a date" 
//                             required 
//                             // Value is now handled internally by jQuery, but we read it via the 'change' event
//                           />
//                         </div>
//                       </div>

//                       <div className="select-room">
//                         <h4>Select a Service</h4>
//                         {/* --- NEW GROUPED DROPDOWN --- */}
//                         <select id="service" className="service-type form-control" name="service" value={formData.service} onChange={handleInputChange}>
//                           {Object.keys(allServicesData).map(category => (
//                             <optgroup label={category.toUpperCase()} key={category}>
//                               {allServicesData[category].map(service => (
//                                 <option value={service.service} key={service.service}>
//                                   {service.service}
//                                 </option>
//                               ))}
//                             </optgroup>
//                           ))}
//                         </select>
//                       </div>

//                       <div id="step-2" className="row g-4 mt-2">
//                         <h4>Enter Your Details</h4>
//                         <div className="col-md-6">
//                           <div>
//                             <input type='text' name='name' id='name' className="form-control" placeholder="Your Name" required value={formData.name} onChange={handleInputChange} />
//                           </div>
//                           <div>
//                             <input type='email' name='email' id='email' className="form-control" placeholder="Your Email" required value={formData.email} onChange={handleInputChange} />
//                           </div>
//                           <div>
//                             <input type='text' name='phone' id='phone' className="form-control" placeholder="Your Phone" required value={formData.phone} onChange={handleInputChange} />
//                           </div>
//                         </div>
//                         <div className="col-md-6">
//                           <textarea name='message' id='message' className="form-control" placeholder="Any special requests or questions?" value={formData.message} onChange={handleInputChange}></textarea>
//                         </div>
//                         <div className="col-md-12">
//                           <p id='submit'>
//                             <input type='submit' id='send_message' value={formStatus === 'submitting' ? 'Sending...' : 'Request Appointment'} className="btn-main" disabled={formStatus === 'submitting'} />
//                           </p>
//                         </div>
//                       </div>
//                     </form>
//                   </div>
//                 )}

//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// }


'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../components/Header';
import Footer from '../components/Footer';
import { allServicesData } from '../services.js';

export default function ReservationPage() {
  const firstCategory = Object.keys(allServicesData)[0];
  const defaultService = allServicesData[firstCategory][0].service;

  const [formData, setFormData] = useState({
    date: null,
    service: defaultService,
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState('idle');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleDateChange = (date) => {
    setFormData(prevState => ({ ...prevState, date: date }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    console.log("Appointment request submitted:", formData);

    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
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
                  layout="fill"
                  objectFit="cover"
                  alt="Reservation Background"
                  priority
                />
              </Parallax>
            </div>
            
            <div className="container relative z-index-1000">
              <div className="row justify-content-center">
                <div className="col-lg-6 text-center">
                  <h1>Book your Appointment</h1>
                  <p className="mt-3 lead">Select your desired service and preferred date to schedule your visit. Your journey to looking and feeling your best starts here.</p>
                  <ul className="crumb">
                    <li><Link href="/">Home</Link></li>
                    <li className="active">Book Appointment</li>
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
                        <p>Thank you! We will contact you shortly to confirm your booking.</p>
                        <Image 
                          src="/images/misc/salon-success.jpg" 
                          width={600} 
                          height={600} 
                          className="w-100 rounded-up-100" 
                          alt="Successful Booking" 
                        />
                      </div>
                    </div>
                  ) : (
                    <div id="booking_form_wrap">
                      <form name="bookingForm" id='booking_form' className="form-border" onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col-md-12">
                            <h4>Choose a Preferred Date</h4>
                            <DatePicker
                              id="date-picker"
                              selected={formData.date}
                              onChange={handleDateChange}
                              className="form-control mb-4"
                              placeholderText="Click to select a date"
                              dateFormat="MM/dd/yyyy"
                              minDate={new Date()} // Past dates ko disable karein
                              required
                              autoComplete="off"
                            />
                          </div>
                        </div>

                        <div className="select-room">
                          <h4>Select a Service</h4>
                          <select 
                            id="service" 
                            className="form-control"
                            name="service" 
                            value={formData.service} 
                            onChange={handleInputChange}
                          >
                            {Object.keys(allServicesData).map(category => (
                              <optgroup label={category.toUpperCase()} key={category}>
                                {allServicesData[category].map(service => (
                                  <option value={service.service} key={service.service}>
                                    {service.service}
                                  </option>
                                ))}
                              </optgroup>
                            ))}
                          </select>
                        </div>

                        <div id="step-2" className="row g-4 mt-2">
                          <h4>Enter Your Details</h4>
                          <div className="col-md-6">
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
                          <div className="col-md-6">
                            <textarea name='message' id='message' className="form-control" placeholder="Any special requests or questions?" value={formData.message} onChange={handleInputChange}></textarea>
                          </div>
                          <div className="col-md-12">
                            <p id='submit'>
                              <input type='submit' id='send_message' value={formStatus === 'submitting' ? 'Sending...' : 'Request Appointment'} className="btn-main" disabled={formStatus === 'submitting'} />
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                  )}

                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}