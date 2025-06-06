import React, { useEffect } from 'react';
import contact from "../images/contactnow.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from "react-helmet";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

function Contactus() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | Multichoice Security Solutions</title>
        <meta
          name="description"
          content="Contact Multichoice Security Solutions for Smart Alarms, CCTV, Fencing & more. Reach out via phone, email, or social media."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://mcsecuritysolutions.com/" />
        <meta property="og:title" content="Contact Us | Multichoice Security Solutions" />
        <meta
          property="og:description"
          content="We’d love to hear from you. Contact us via phone, email, WhatsApp, or social media."
        />
        <meta property="og:image" content="http://mcsecuritysolutions.com/images/contactnow.jpg" />
        <meta property="og:url" content="http://mcsecuritysolutions.com//contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Multichoice Security Solutions",
            "url": "http://mcsecuritysolutions.com/",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+92 333 8886978",
              "contactType": "Customer Service"
            },
            "sameAs": [
              "https://facebook.com/multichoice",
              "https://instagram.com/multichoice"
            ],
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Main Boulevard",
              "addressLocality": "Lahore",
              "addressCountry": "PK"
            }
          })}
        </script>
      </Helmet>

      {/* Desktop Header Image */}
      <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={contact}
          alt="Contact Multichoice Security – Desktop View"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      {/* Mobile Header Image */}
      <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={contact}
          alt="Contact Multichoice Security – Mobile View"
          className="w-full h-[50vh] object-cover"
        />
      </div>

      <section className="bg-black mt-20 text-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center overflow-hidden">
          <h1 className="text-4xl font-bold text-yellow-500 mb-6" data-aos="fade-left">
            Contact Us
          </h1>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto" data-aos="fade-right">
            We'd love to hear from you! Whether you have a question about our services, need
            assistance, or just want to talk security — our team is ready to help.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-yellow-500 text-2xl" />
              <div data-aos="zoom-in-up">
                <h2 className="text-xl font-semibold">Phone</h2>
                <p className="text-gray-300">+92 333 8886978</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4" data-aos="zoom-in-up">
              <FaEnvelope className="text-yellow-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-300">support@multichoice.com</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4" data-aos="zoom-in-up">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Location</h2>
                <p className="text-gray-300">Main Boulevard, Lahore, Pakistan</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start gap-4" data-aos="zoom-in-up">
              <FaWhatsapp className="text-yellow-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">WhatsApp</h2>
                <p className="text-gray-300">Chat with us at +92 333 8886978</p>
              </div>
            </div>

            {/* Facebook */}
            <div className="flex items-start gap-4" data-aos="zoom-in-up">
              <FaFacebookF className="text-yellow-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Facebook</h2>
                <a
                  href="https://facebook.com/multichoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  facebook.com/multichoice
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4" data-aos="zoom-in-up">
              <FaInstagram className="text-yellow-500 text-2xl" />
              <div>
                <h2 className="text-xl font-semibold">Instagram</h2>
                <a
                  href="https://instagram.com/multichoice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:underline"
                >
                  instagram.com/multichoice
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
