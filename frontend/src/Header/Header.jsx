// Header.js (SEO Best Practices Applied)
import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaHome,
  FaVideo,
  FaBolt,
  FaSun,
  FaFire,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { NavLink, Link } from "react-router-dom";
import logo from "../images/mysecuritylogofinal.png";

function Header() {
  const phoneNumber = "923330685543";
  const message = "Greetings To DevMotive! I Want To Know About Your Services..";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const [showMessage, setShowMessage] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);

  useEffect(() => {
    let showTimeout, hideTimeout, intervalId;

    showTimeout = setTimeout(() => {
      setShowMessage(true);
      hideTimeout = setTimeout(() => setShowMessage(false), 2000);
      intervalId = setInterval(() => {
        setShowMessage(true);
        hideTimeout = setTimeout(() => setShowMessage(false), 2000);
      }, 30000);
    }, 3000);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById("topbar");
      if (topbar) topbar.style.display = window.scrollY > 50 ? "none" : "flex";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: null, submenu: true },
    { name: "WHY MULTICHOICE", path: "/multichoice" },
    { name: "OUR STORY", path: "/ourstory" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const servicesSubmenu = [
    { name: "Smart Alarm System", path: "/smart-alarm-system", icon: <FaBell /> },
    { name: "Smart Door Automation", path: "/smart-Door-automation", icon: <FaHome /> },
    { name: "CCTV Surveillance", path: "/cctv-surveillance", icon: <FaVideo /> },
    { name: "Electric Fence", path: "/electric-fence", icon: <FaBolt /> },
    { name: "Solar Energy", path: "/solar-energy", icon: <FaSun /> },
    { name: "Fire Detection System", path: "/fire-detection-system", icon: <FaFire /> },
  ];

  const linkStyle = "text-gray-700 font-medium px-3 py-2 transition-all duration-200";
  const activeStyle = "text-yellow-400 border-b-2 border-yellow-400";

  return (
    <>
      <div className="flex fixed bottom-2 right-2 lg:bottom-10 lg:right-10 items-center bg-slate-100 rounded-full shadow-lg z-50">
        <h1
          className="text-gray-800 lg:text-lg pl-2 transition-all duration-500 overflow-hidden h-7 whitespace-nowrap"
          style={{ width: showMessage ? "250px" : "0px" }}
        >
          We're just one message away!
        </h1>
        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={50} />
        </button>
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        <div id="topbar" className="bg-yellow-500 px-4 py-2 flex justify-between lg:justify-around items-center text-black text-lg">
          <div className="lg:flex hidden items-center space-x-4">
            <div className="flex items-center gap-1 border-r-2 border-white pr-3">
              <FaPhoneAlt className="text-green-400" /><span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-1 border-r-2 border-white pr-3">
              <FaWhatsapp className="text-green-500" /><span>+1 987 654 321</span>
            </div>
            <div className="flex items-center gap-1 pr-3">
              <MdEmail className="text-red-400" /><span>example@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebookF className="text-blue-500 bg-white text-3xl p-1 rounded-lg" /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram className="text-red-500 bg-white text-3xl p-1 rounded-lg" /></a>
            <a href="https://google.com" aria-label="Google"><FcGoogle className="text-3xl p-1  bg-whiterounded-lg" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedinIn className="text-blue-600 bg-white text-3xl p-1 rounded-lg" /></a>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><FaWhatsapp className="text-green-500 bg-white text-3xl p-1 rounded-lg" /></a>
            <button onClick={() => window.open(whatsappUrl)} className="bg-black text-white px-2 py-2 rounded hover:bg-green-600 transition text-sm lg:text-base">
              <FaPhoneAlt className="inline mr-2" />CONTACT NOW
            </button>
          </div>
        </div>

        <div className="bg-white shadow-md relative z-40">
          <div className="flex justify-between lg:justify-around items-center px-4 py-2">
            <Link to="/" aria-label="Home"><img src={logo} alt="Multichoice Security Logo" className="h-16 lg:h-16" loading="lazy" /></Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden text-2xl" aria-label="Menu Toggle"><FaBars /></button>
            <div className="hidden lg:flex space-x-6 items-center">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name} onMouseEnter={() => setShowServicesMenu(true)} onMouseLeave={() => setShowServicesMenu(false)} className="relative">
                    <span className={`${linkStyle} hover:text-yellow-500 cursor-pointer`}>{item.name}</span>
                    {showServicesMenu && (
                      <div className="absolute top-full left-0 bg-white shadow-lg border mt-2 rounded w-[40rem] grid grid-cols-2 gap-2 p-4 z-50">
                        {servicesSubmenu.map((service) => (
                          <Link key={service.path} to={service.path} className="flex items-center px-4 py-2 rounded text-lg text-gray-800 hover:bg-yellow-500 hover:text-white transition">
                            <span className="mr-2 text-yellow-500 group-hover:text-white">{service.icon}</span>{service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink key={item.path} to={item.path} className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : "hover:text-yellow-500"}`}>{item.name}</NavLink>
                )
              )}
            </div>
          </div>

          {/* Mobile Nav */}
          <div className={`lg:hidden transition-all duration-500 overflow-hidden ${menuOpen ? "max-h-[1000px]" : "max-h-0"} bg-white`}>
            <div className="flex flex-col px-4 pb-4 space-y-2">
              {navItems.map((item) =>
                item.submenu ? (
                  <div key={item.name}>
                    <div className="flex justify-between items-center">
                      <span className={`${linkStyle} hover:text-yellow-500 cursor-pointer`}>{item.name}</span>
                      <button onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)} aria-label="Toggle Services Submenu">
                        {mobileSubmenuOpen ? "▲" : "▼"}
                      </button>
                    </div>
                    <div className={`pl-4 overflow-hidden transition-all duration-300 ${mobileSubmenuOpen ? "max-h-96" : "max-h-0"}`}>
                      {servicesSubmenu.map((sub) => (
                        <NavLink key={sub.path} to={sub.path} onClick={() => { setMenuOpen(false); setMobileSubmenuOpen(false); }} className={({ isActive }) => `flex items-center gap-2 py-1 ${linkStyle} ${isActive ? activeStyle : "hover:text-yellow-500"}`}>{sub.icon}{sub.name}</NavLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <NavLink key={item.path} to={item.path} onClick={() => setMenuOpen(false)} className={({ isActive }) => `${linkStyle} ${isActive ? activeStyle : "hover:text-yellow-500"}`}>{item.name}</NavLink>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
