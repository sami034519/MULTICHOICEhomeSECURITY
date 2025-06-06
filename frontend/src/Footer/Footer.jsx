import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/securitylogosinglef.png";
import { useState } from "react";
import { useEffect } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {
 
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    service: "",
    adress: "", // <-- added
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      const res = await axios.post(
        "https://mutichoicemailer.vercel.app/api/order",
        formData
      );
      setStatus(res.data.message || "Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "", // Reset service too
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      setStatus(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };
  const [isLoading, setIsLoading] = useState(false);
   const phoneNumber = "923330685543"; // international format

// Convert formData to readable string
const formattedFormData = Object.entries(formData)
  .map(([key, value]) => `${key}: ${value}`)
  .join('\n');

const message = `PLEASE SEND ON WHATSAPP ALSO FOR IMMEDIATE RESPONSE\n\n${formattedFormData}`;
const encodedMessage = encodeURIComponent(message);
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

const handleClick = () => {
  
    window.open(whatsappUrl, "_blank");
  
};
const handle2Submit = (e) => {
  e.preventDefault();

  handleSubmit(e) ;     // First function
  handleClick();   // Second function (can have delay)
};

  return (
    <>
      <div className="bg-yellow-500 py-10 px-6 text-black overflow-hidden">
        <h3
          className="text-4xl font-bold mb-6 text-center"
          data-aos="fade-left"
        >
          FEEL FREE FOR BOOKING
        </h3>
        <form
          onSubmit={handle2Submit}
          
          className="max-w-2xl mx-auto space-y-4"
          data-aos="zoom-in-down"
        >
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="w-full p-2 border rounded"
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Phone"
            className="w-full p-2 border rounded"
          />
          <input
            name="adress"
            value={formData.adress}
            onChange={handleChange}
            required
            placeholder="Adress"
            className="w-full p-2 border rounded"
          />
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          >
            <option value="">Select a Service</option>
            <option value="Smart Alarm System">Smart Alarm System</option>
            <option value="Smart Door Automation">Smart Door Automation</option>
            <option value="CCTV Surveillance">CCTV Surveillance</option>
            <option value="Electric Fence">Electric Fence</option>
            <option value="Solar Energy">Solar Energy</option>
            <option value="Fire Detection System">Fire Detection System</option>
          </select>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Message"
            className="w-full p-2 border rounded h-32"
          />
          <button
            type="submit"
            
            className="btn bg-black text-yellow-400 text-lg w-full font-semibold px-6 py-2 rounded hover:bg-green-800"
          >
            SUBMIT
          </button>
          {isLoading ? (
            <div className="flex justify-center mt-4 ">
              <div className="w-6 h-6 border-4 border-t-transparent border-black rounded-full animate-spin"></div>
            </div>
          ) : (
            status && (
              <p className="text-center text-lg mt-4 bg-white text-black font-medium">
                {status}
              </p>
            )
          )}
        </form>
      </div>
      {/* footer  */}
      <div className="relative bg-black text-white w-full px-4 py-10">
        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-screen-xl mx-auto pb-10">
          {/* Left Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
            <Link to="" className="hover:border-b-2 border-white transition">
              ABOUT
            </Link>
            <Link to="" className="hover:border-b-2 border-white transition">
              PORTFOLIO
            </Link>
            <Link to="" className="hover:border-b-2 border-white transition">
              SERVICES
            </Link>
          </div>

          {/* Center Logo and Address */}
          <div className="text-center max-w-md">
            <Link to="/">
              <img
                className="h-32 mx-auto mb-4"
                src={logo}
                alt="DevMotive Logo"
                loading="lazy"
              />
            </Link>
            <p>© 2025 DEVMOTIVE. All Rights Reserved.</p>
            <p>123 Baker Street, London W1U 6RS, United Kingdom</p>
          </div>

          {/* Right Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
            <Link to="" className="hover:border-b-2 border-white transition">
              TEAMS
            </Link>
            <Link to="" className="hover:border-b-2 border-white transition">
              CONTACT US
            </Link>
            <Link to="" className="hover:border-b-2 border-white transition">
              HOME
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-white w-full max-w-screen-xl mx-auto mb-10"></div>

        {/* Social Icons Grid */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-screen-md text-xl">
            {[
              {
                name: "Facebook",
                icon: <FaFacebookF />,
                url: "https://facebook.com",
                color: "hover:text-blue-600",
              },
              {
                name: "Instagram",
                icon: <FaInstagram />,
                url: "https://instagram.com",
                color: "hover:text-pink-500",
              },
              {
                name: "YouTube",
                icon: <FaYoutube />,
                url: "https://youtube.com",
                color: "hover:text-red-600",
              },
              {
                name: "TikTok",
                icon: <SiTiktok />,
                url: "https://tiktok.com",
                color: "hover:text-black",
              },
              {
                name: "LinkedIn",
                icon: <FaLinkedinIn />,
                url: "https://linkedin.com",
                color: "hover:text-blue-700",
              },
              {
                name: "Behance",
                icon: <FaBehance />,
                url: "https://behance.net",
                color: "hover:text-blue-500",
              },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between gap-4 border border-white rounded-md p-3 transition duration-300 ${item.color}`}
              >
                <span className="text-base">{item.name}</span>
                <span className="text-2xl">{item.icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
