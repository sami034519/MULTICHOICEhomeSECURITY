import React from 'react'
import contact from "../images/contactnow.jpg"

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
function Contactus() {
  return (
    <>
    
    <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
            <img
              loading="lazy"
              src={contact}
              alt="Smart Home Security"
              className="w-full h-[90vh] object-cover"
            />
          </div>
    
          {/* Mobile Version */}
          <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
            <img
              loading="lazy"
              src={contact}
              alt="Smart Home Security Mobile"
              className="w-full h-[50vh] object-cover"
            />
          </div>

           <section className="bg-black mt-20 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-yellow-500 mb-6">Contact Us</h2>
        <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our services, need assistance, or just want to talk security — our team is ready to help.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {/* Phone */}
          <div className="flex items-start gap-4">
            <FaPhoneAlt className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Phone</h4>
              <p className="text-gray-300">+92 333 8886978</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <FaEnvelope className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Email</h4>
              <p className="text-gray-300">support@multichoice.com</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <FaMapMarkerAlt className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Location</h4>
              <p className="text-gray-300">Main Boulevard, Lahore, Pakistan</p>
            </div>
          </div>

          {/* WhatsApp */}
          <div className="flex items-start gap-4">
            <FaWhatsapp className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">WhatsApp</h4>
              <p className="text-gray-300">Chat with us at +92 333 8886978</p>
            </div>
          </div>

          {/* Facebook */}
          <div className="flex items-start gap-4">
            <FaFacebookF className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Facebook</h4>
              <a href="https://facebook.com/multichoice" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                facebook.com/multichoice
              </a>
            </div>
          </div>

          {/* Instagram */}
          <div className="flex items-start gap-4">
            <FaInstagram className="text-yellow-500 text-2xl" />
            <div>
              <h4 className="text-xl font-semibold">Instagram</h4>
              <a href="https://instagram.com/multichoice" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">
                instagram.com/multichoice
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
                     
          </>
  )
}

export default Contactus