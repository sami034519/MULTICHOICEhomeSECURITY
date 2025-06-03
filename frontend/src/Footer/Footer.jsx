import React from 'react'
import { Link } from "react-router-dom";
import logo from "../images/securitylogosinglef.png";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaBehance,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
function Footer() {
  return (
    <div className="relative bg-black text-white w-full px-4 py-10">
  {/* Main Footer Content */}
  <div className="flex flex-col lg:flex-row justify-between items-center gap-10 max-w-screen-xl mx-auto pb-10">
    
    {/* Left Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
      <Link to="" className="hover:border-b-2 border-white transition">ABOUT</Link>
      <Link to="" className="hover:border-b-2 border-white transition">PORTFOLIO</Link>
      <Link to="" className="hover:border-b-2 border-white transition">SERVICES</Link>
    </div>

    {/* Center Logo and Address */}
    <div className="text-center max-w-md">
      <Link to="/">
        <img className="h-32 mx-auto mb-4" src={logo} alt="DevMotive Logo" loading="lazy"/>
      </Link>
      <p>© 2025 DEVMOTIVE. All Rights Reserved.</p>
      <p>123 Baker Street, London W1U 6RS, United Kingdom</p>
    </div>

    {/* Right Links */}
    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 font-medium">
      <Link to="" className="hover:border-b-2 border-white transition">TEAMS</Link>
      <Link to="" className="hover:border-b-2 border-white transition">CONTACT US</Link>
      <Link to="" className="hover:border-b-2 border-white transition">HOME</Link>
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
  )
}

export default Footer