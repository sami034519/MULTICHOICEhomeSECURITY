import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Contactimg from "../images/contactnow.jpg" // Replace with actual path

const Contact = () => {
  return (
    <div className="relative z-30 bg-yellow-500 w-full px-4 py-10 overflow-hidden">
      {/* Heading */}
      <div className="w-full flex justify-center pb-10">
        <h1 className="text-4xl font-semibold text-center text-black" data-aos="fade-down">
          FEEL <span className="text-white">FREE TO </span>CONTACT
        </h1>
      </div>

      {/* Contact Area */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-screen-xl mx-auto">
        {/* Image with Social Overlay */}
        <div className="relative group w-full h-full max-w-lg">
          <img
            loading="lazy"
            data-aos="fade-up"
            src={Contactimg}
            alt="Contact"
            className="w-full lg:h-[350px] rounded-lg"
          />
          <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="text-white text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-white text-2xl hover:text-blue-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="text-white text-2xl hover:text-sky-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-white text-2xl hover:text-red-500 transition" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full max-w-xl px-2" data-aos="fade-up">
          <form className="flex flex-col gap-4">
            {/* Name & Email */}
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black rounded"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black rounded"
              />
            </div>

            {/* WhatsApp Number */}
            <input
              type="text"
              placeholder="WhatsApp Number"
              className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black rounded"
            />

            {/* Service Name Dropdown */}
           <select
  className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black rounded text-gray-600"
  defaultValue=""
>
  <option value="" disabled>Select Service</option>
  <option value="smart-alarm">Smart Alarm System</option>
  <option value="home-automation">Smart Home Automation</option>
  <option value="cctv">CCTV Surveillance</option>
  <option value="auto-gate">Smart Auto Gate</option>
  <option value="electric-fence">Electric Fence</option>
  <option value="solar-energy">Solar Energy</option>
  <option value="fire-detection">Fire Detection System</option>
  
</select>

            {/* Address */}
            <textarea
              placeholder="Address"
              rows="3"
              className="bg-white w-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-black rounded resize-none"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-black text-yellow-400 py-3 font-semibold rounded hover:bg-gray-900 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
