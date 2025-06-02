import React, { useEffect, useState } from "react";
import {
  FaBell,
  FaHome,
  FaVideo,
  FaDoorOpen,
  FaBolt,
  FaSun,
  FaFire,
} from 'react-icons/fa';
import {
  FaPhoneAlt,
  
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaBars,
 
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { NavLink, Link} from "react-router-dom";
import logo from "../images/mysecuritylogofinal.png";

function Header() {
  const phoneNumber = "923330685543"; // international format
  const message =
    "Greetings To DevMotive! I Want To Know About Your Services..";
  const [showmessage, setshowmessage] = useState(false);

 useEffect(() => {
  let showTimeout, hideTimeout, intervalId;

  // First time: Show after 3 seconds, then hide after 2 seconds
  showTimeout = setTimeout(() => {
    setshowmessage(true);

    // Hide after 2 seconds
    hideTimeout = setTimeout(() => {
      setshowmessage(false);
    }, 2000);

    // Set interval for every 2 minutes (120000 ms)
    intervalId = setInterval(() => {
      setshowmessage(true);

      // Hide again after 2 seconds
      hideTimeout = setTimeout(() => {
        setshowmessage(false);
      }, 2000);
    }, 30000);
  }, 3000);

  return () => {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    clearInterval(intervalId);
  };
}, []);

// run only onc

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  const [menuOpen, setMenuOpen] = useState(false);
  const [showServicesMenu, setShowServicesMenu] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      const topbar = document.getElementById("topbar");
      if (!topbar) return;
      topbar.style.display = window.scrollY > 50 ? "none" : "flex";
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "SERVICES", path: "/services" },
    { name: "BLOGS", path: "/blogs" },
    { name: "TEAMS", path: "/teams" },
    { name: "CONTACT US", path: "/contact" },
  ];

 const servicesSubmenu = [
  {
    name: "Smart Alarm System",
    path: "/services/smart-alarm-system",
    icon: <FaBell />,
  },
  {
    name: "Smart Home Automation",
    path: "/services/smart-home-automation",
    icon: <FaHome />,
  },
  {
    name: "CCTV Surveillance",
    path: "/services/cctv-surveillance",
    icon: <FaVideo />,
  },
  {
    name: "Smart Auto Gate",
    path: "/services/smart-auto-gate",
    icon: <FaDoorOpen />,
  },
  {
    name: "Electric Fence",
    path: "/services/electric-fence",
    icon: <FaBolt />,
  },
  {
    name: "Solar Energy",
    path: "/services/solar-energy",
    icon: <FaSun />,
  },
  {
    name: "Fire Detection System",
    path: "/services/fire-detection-system",
    icon: <FaFire />,
  },
];

  const linkStyle =
    "text-gray-700 font-medium px-3 py-2 transition-all duration-200";
  const activeStyle = "text-yellow-400  border-b-2 border-yellow-400 ";

  return (
    <>
      {/* WhatsApp Chat Button */}
      <div className="flex fixed bottom-2 right-2 lg:bottom-10 lg:right-10 justify-between items-center  shadow-slate-400 bg-slate-100 rounded-full   z-50 shadow-lg">
        <h1
          id="whatsappmessage"
          className="text-gray-800 lg:text-lg pb-1 pl-1 transition-all duration-500 overflow-hidden lg:font-medium h-7 "
          style={{ width: showmessage ? "250px" : "0px" }}
        >
          We're just one message away!
        </h1>

        <button
          onClick={handleClick}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp size={50} />
        </button>
      </div>

      <div className="fixed top-0 left-0 w-full z-50">
        {/* Topbar */}
        <div
          id="topbar"
          className="bg-yellow-400 text-black text-lg px-4 flex justify-between lg:justify-around items-center py-2 z-40"
        >
          <div className="lg:flex hidden items-center space-x-4">
            <div className="flex items-center gap-1 border-r-2 border-white pr-3">
              <FaPhoneAlt className="text-green-400" />
              <span>+1 234 567 890</span>
            </div>
            <div className="flex items-center gap-1 border-r-2 border-white pr-3">
              <FaWhatsapp className="text-green-500" />
              <span>+1 987 654 321</span>
            </div>
            <div className="flex items-center gap-1 pr-3">
              <MdEmail className="text-red-400" />
              <span>example@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://facebook.com"
              className="hover:bg-blue-500 border-2 border-black p-1 rounded-lg"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              className="hover:bg-blue-400 border-2 border-black p-1 rounded-lg"
            >
              <FaTwitter />
            </a>
            <a
              href="https://google.com"
              className="hover:bg-red-500 border-2 border-black p-1 rounded-lg"
            >
              <FcGoogle />
            </a>
            <a
              href="https://linkedin.com"
              className="hover:bg-blue-600 border-2 border-black p-1 rounded-lg"
            >
              <FaLinkedinIn />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:bg-green-500 border-2 border-black p-1 rounded-lg"
            >
              <FaWhatsapp />
            </a>
           <div className="bg-yellow-500 pt-1 rounded" onClick={handleClick}>
      <button className="flex items-center gap-2 bg-black text-white lg:text-base px-1 text-sm py-2 lg:px-4 lg:py-2 rounded hover:bg-green-600 transition duration-300">
        <FaPhoneAlt />
        CONTACT NOW
      </button>
    </div>
          </div>
        </div>

        {/* Menu Bar */}
        <div className="bg-white shadow-md z-40 relative">
          <div className="flex lg:justify-around justify-between items-center px-4 lg:px-16 py-2">
            <Link to="/">
              <img
                src={logo}
                alt="Logo"
                className="h-12 lg:h-16"
                loading="lazy"
              />
            </Link>
            <button onClick={toggleMenu} className="lg:hidden text-2xl">
              <FaBars />
            </button>
            <div className="hidden lg:flex space-x-6 items-center relative">
              {navItems.map((item) =>
                item.name === "SERVICES" ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setShowServicesMenu(true)}
                    onMouseLeave={() => setShowServicesMenu(false)}
                  >
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `${linkStyle} ${
                          isActive
                            ? activeStyle
                            : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                    {showServicesMenu && (
                      <div className="absolute top-full left-0 bg-white shadow-lg border mt-2 rounded z-50 w-[40rem] grid grid-cols-2 gap-2 p-4">
                        {servicesSubmenu.map((service, index) => (
                          <Link
                            key={index}
                            to={service.path}
                            className="group flex items-center px-4 py-2 rounded text-lg text-gray-800 hover:bg-yellow-400 hover:text-white transition"
                          >
                            <span className="mr-2 text-yellow-400 group-hover:text-white">
                              {service.icon}
                            </span>
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      `${linkStyle} ${
                        isActive
                          ? activeStyle
                          : "hover:text-yellow-400 hover:border-b-2 hover:border-yellow-400 "
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              )}
            </div>
          </div>

          {/* Mobile Slide Menu */}
         {/* Mobile Slide Menu */}
<div
  className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
    menuOpen ? "max-h-[1000px]" : "max-h-0"
  } bg-white`}
>
  <div className="flex flex-col px-4 pb-4 space-y-2">
    {navItems.map((item) =>
      item.name === "SERVICES" ? (
        <div key={item.name}>
          {/* Main SERVICES NavLink and Toggle Button */}
          <div className="flex justify-between items-center w-full">
            <NavLink
              to={item.path}
              onClick={() => {
                setMenuOpen(false);
              }}
              className={({ isActive }) =>
                `w-full text-left ${linkStyle} ${
                  isActive
                    ? activeStyle
                    : "hover:text-yellow-400  hover:border-b-2 hover:border-yellow-400 "
                }`
              }
            >
              {item.name}
            </NavLink>

            {/* Toggle for Submenu */}
            <button
              onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
              className="ml-2 text-gray-700 focus:outline-none text-lg"
              aria-label="Toggle Services Submenu"
            >
              {mobileSubmenuOpen ? "▲" : "▼"}
            </button>
          </div>

          {/* Submenu Items */}
          <div
            className={`pl-4 overflow-hidden transition-all duration-300 ${
              mobileSubmenuOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            {servicesSubmenu.map((sub) => (
              <NavLink
                key={sub.path}
                to={sub.path}
                onClick={() => {
                  setMenuOpen(false);
                  setMobileSubmenuOpen(false);
                }}
                className={({ isActive }) =>
                  `flex items-center gap-2 py-1 ${linkStyle} ${
                    isActive
                      ? activeStyle
                      : "hover:text-yellow-400  hover:border-b-2 hover:border-yellow-400 "
                  }`
                }
              >
                {sub.icon}
                {sub.name}
              </NavLink>
            ))}
          </div>
        </div>
      ) : (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={() => setMenuOpen(false)}
          className={({ isActive }) =>
            `${linkStyle} ${
              isActive
                ? activeStyle
                : "hover:text-yellow-400  hover:border-b-2 hover:border-yellow-400 "
            }`
          }
        >
          {item.name}
        </NavLink>
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
