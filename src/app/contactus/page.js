'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useExternalScript } from '../../hooks/useExternalScript';

export default function ContactPage() {
  // Load designesia.js script using the custom hook
  const { loaded, error } = useExternalScript('/js/designesia.js');

  // Optional: Handle loading states
  if (error) {
    console.error('Failed to load designesia.js');
  }

  // You can use the 'loaded' state if you need to wait for the script
  console.log('Script loaded:', loaded);
  
  // Form fields ke liye state banayenge
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  // Form ke submission status ke liye state
  const [formStatus, setFormStatus] = useState(''); // '', 'success', 'error'

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [id]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Default form submission ko rokna
    setFormStatus('loading');

    // YAHAN PAR FORM SUBMISSION LOGIC AAYEGA
    // Abhi ke liye, hum ek dummy success message dikhayenge.
    // Asli project mein, aap yahan se ek API endpoint ko call karenge jo email bhejega.
    console.log("Form data submitted:", formData);

    // Dummy delay to simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Form fields ko clear karna
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 1000);
  };

  return (
    <div>
      <Header />
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        <section id="subheader" className="relative jarallax text-light">
          <img src="/images/the_salon_company/7.JPG" className="jarallax-img" alt="" />
          <div className="container relative z-index-1000">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Contact Us</h1>
                <p className="lead mt-3">
                  Have a question about our services or want to schedule a consultation? We&apos;re here to help you shine. Get in touch with our expert team.
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
                        <input type='submit' id='send_message' value='Send Message' className="btn-main" />
                      </div>
                    </div>
                  </div>

                  {formStatus === 'success' && (
                    <div id="success_message" className='success' style={{display: 'block'}}>
                      Your message has been sent successfully. We will get back to you shortly.
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div id="error_message" className='error' style={{display: 'block'}}>
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
  );
};


// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// const ContactUs = () => {
//   return (
//     <div>
//       <Header />
//       <div className="no-bottom no-top" id="content">
//         <div id="top"></div>
//         <section id="section-contact">
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-12">
//                 <div className="text-center">
//                   <h2>Contact Us</h2>
//                   <div className="small-border"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;
