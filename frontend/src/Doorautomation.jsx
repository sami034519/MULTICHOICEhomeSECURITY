import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "animate.css";
import crousal1 from "./images/door.jpeg";
import mobilecrousal1 from "./images/door.jpeg";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBluetoothB, FaUserShield, FaBell, FaMobileAlt, FaUsers } from "react-icons/fa";
import door1 from "./images/door1.JPG";
import door2 from "./images/door2.JPG";
import door3 from "./images/door3.JPG";
import door5 from "./images/door4.JPG";
import door4 from "./images/door5.JPG";
import doormobile from "./images/doormobile.png";
import doorimage from "./images/doorautoimage.jpg";
import homestructure from "./images/homestructuref.JPG";

function Doorautomation() {
    const doorFeatures = [
  {
    icon: <FaBluetoothB size={40} className="text-yellow-500 mx-auto mb-4" />,
    title: "Secure Bluetooth Access",
    description: "Connect and control your gate securely using your smart device via Bluetooth.",
  },
  {
    icon: <FaMobileAlt size={40} className="text-yellow-500 mx-auto mb-4" />,
    title: "Easy Setup",
    description: "Quick and affordable installation with user-friendly mobile integration.",
  },
  {
    icon: <FaUsers size={40} className="text-yellow-500 mx-auto mb-4" />,
    title: "Permanent User Control",
    description: "Authorize specific users for continuous auto gate access.",
  },
  {
    icon: <FaUserShield size={40} className="text-yellow-500 mx-auto mb-4" />,
    title: "Visitor Access",
    description: "Grant temporary gate access to guests securely through the app.",
  },
  {
    icon: <FaBell size={40} className="text-yellow-500 mx-auto mb-4" />,
    title: "Instant Notifications",
    description: "Receive alerts directly on your phone for every gate activity.",
  },
];
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);
  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);
  const [animate, setAnimate] = useState(false);
  const door = [
    {
      img: door1,
      define: "Connect with Smart Device / Control Gate securely via Bluetooth",
    },
    {
      img: door2,
      define: "Easy and affordable installation",
    },
    {
      img: door3,
      define: "Select permanent users to access your autogate",
    },

    {
      img: door4,
      define: "Provide temporary access to visitors to operate autogate",
    },

    {
      img: door5,
      define: "Get important notifications straight from your smartphones",
    },
  ];
  return (
    <>
      <div className="hidden top-32 lg:block relative w-full h-[70vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Smart Home Security"
          className="w-full h-[70vh] object-cover"
        />

        <div
          className={`absolute lg:w-full top-0 left-0 h-[70vh] bg-black bg-opacity-30 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-[200px] left-4 transform -translate-y-1/2 text-white transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <h1
            className={`lg:text-[80px] text-xl font-semibold lg:mt-28 ${
              animate
                ? "animate__animated animate__fadeInDownBig animate__delay-1s"
                : ""
            }`}
          >
            UNIQUE ACCESS
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold lg:mb-1 lg:mt-16 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SMART
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold mb-2 lg:mb-10 lg:mt-6 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            DOOR AUTOMATION
          </h1>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Protecting What Matters Most — Your Home, Your Peace. Reliable, and
            scalable
            <span className="lg:block hidden">
              {" "}
              Smart Security Solutions for Safer Homes.
            </span>
          </p>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={mobilecrousal1}
          alt="Smart Home Security Mobile"
          className="w-full h-[50vh] object-cover"
        />

        <div
          className={`absolute w-screen top-0 left-0 h-[50vh] bg-black bg-opacity-10 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute top-[120px] left-4 transform -translate-y-1/2  transition-all duration-1000 ${
            animate
              ? "translate-x-0 opacity-100"
              : "-translate-x-full opacity-0"
          }`}
        >
          <p
            className={`text-5xl font-extrabold mt-3 leading-10 py-4 text-yellow-500 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SMART <br />
            DOOR AUTOMATION
          </p>
        </div>
      </div>
      {/* intro  */}
      <div className=" relative z-30 lg:mt-48 mt-28 flex justify-center items-center w-full">
        <h1
          className="lg:text-5xl text-gray-700 text-3xl font-bold border-b-4 border-yellow-500"
          data-aos="zoom-in-down"
        >
          {" "}
          DOOR AUTOMATIONS
        </h1>
      </div>
      <div className="flex justify-center items-center w-full overflow-hidden">
        <p
          className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
          data-aos="fade-left"
        >
          Our Smart Door Automation systems bring next-level convenience and
          security to modern homes and businesses. Designed with advanced
          technology, these systems offer seamless access control, remote
          operation via mobile apps, integration with smart security, and
          real-time monitoring. Whether you're home or away, you can open,
          close, and monitor your doors with ease. Stay in control and enhance
          your safety with intelligent automation solutions. Trust MultiChoice
          to deliver reliable, innovative entry systems tailored for your peace
          of mind.
        </p>
      </div>
      <section>
        <div className="relative z-30 h-screen w-screen bg-slate-100 mt-8">
          <div className=" absolute lg:left-48 z-30   grid grid-cols-1 px-4">
            {door.map((item, index) => (
              <div
                key={index}
                className="flex items-center p-4 "
                data-aos="fade-up"
              >
                <img
                  src={item.img}
                  alt={`Door Automation ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-full"
                />
                <p className="lg:text-gray-700 text-black font-medium tet-lg lg:text-sm md:text-base">
                  {item.define}
                </p>
              </div>
            ))}
          </div>

          <div className="absolute right-40 z-10 max-w-[400px]">
            <img src={doormobile} alt="" />
          </div>
        </div>
         <section className="py-16 px-4 lg:px-24 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doorFeatures.map((card, index) => (
          <div
            key={index}
            className="bg-slate-800 rounded-xl p-6 text-center shadow-md hover:shadow-lg transition duration-300"
            data-aos="zoom-in-down"
          >
            {card.icon}
            <h3 className="text-xl font-semibold text-white mb-2">
              {card.title}
            </h3>
            <p className="text-white text-sm">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
        <div>
          <img className="w-full lg:h-[40vh]" src={doorimage} alt="" />
        </div>
      </section>
      
    <img src={homestructure} alt="" data-aos="zoom-in-up"/>
   
    </>
  );
}

export default Doorautomation;
