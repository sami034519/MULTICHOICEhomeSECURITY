import React, { useEffect, useState } from "react";
import { FaBell, FaMobileAlt, FaShieldAlt } from "react-icons/fa";
import crousal1 from "../images/alarmsystemservice.jpg";
import mobilecrousal1 from "../images/alarmsystemservice.jpg";


import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import alarm1 from "../images/ararm1.JPG";
import alarm2 from "../images/alarm2.JPG";
import alarm3 from "../images/alarm3.JPG";
import alarm4 from "../images/alarm4.JPG";
import alarm5 from "../images/alarm5.JPG";
import alarm6 from "../images/alarm6.JPG";
import alarm7 from "../images/alarm7.JPG";
import alarm8 from "../images/alarm8.JPG";
import Contact from "../ORDER/Orderform";
import homestructure from "../images/homestructuref.JPG";

function SmartAlarmSystem() {
  const benifits = [
    { img: alarm1 },
    { img: alarm2 },
    { img: alarm3 },
    { img: alarm4 },
    { img: alarm5 },
    { img: alarm6 },
    { img: alarm7 },
    { img: alarm8 },
  ];
  const cards = [
    {
      icon: <FaBell className="text-yellow-400 text-5xl mb-4" />,
      title: "Real-Time Alerts",
      description:
        "Receive instant notifications on your phone whenever motion or intrusion is detected — stay informed anytime, anywhere.",
    },
    {
      icon: <FaMobileAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "Mobile Access",
      description:
        "Manage your alarm system remotely through our user-friendly mobile app. Arm, disarm, and monitor with ease.",
    },
    {
      icon: <FaShieldAlt className="text-yellow-400 text-5xl mb-4" />,
      title: "24/7 Monitoring",
      description:
        "Our systems run around the clock, providing you with constant surveillance and peace of mind every day of the year.",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: false,
      mirror: true,
    });
  }, []);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setAnimate(true), 50);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div className="hidden top-24 lg:block relative w-full h-[80vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Smart Home Security"
          className="w-full h-[80vh] object-cover"
        />

        <div
          className={`absolute lg:w-full top-0 left-0 h-[80vh] bg-black bg-opacity-30 transition-all duration-1000 ${
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
            UNIQUE ALARMS
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
            ALARM SYSTEMS
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
            className={`text-5xl font-extrabold mt-3 leading-10 py-4 text-yellow-600 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SMART <br /> ALARM SYSTEMS
          </p>
        </div>
      </div>
      <section className="pt-12 z-30  relative bg-white">
        <div className="flex justify-center items-center w-full">
          <h1
            className="lg:text-5xl text-gray-700 text-3xl font-bold border-b-4 border-yellow-500"
            data-aos="zoom-in-down"
          >
            {" "}
            DIGITAL ALARMS
          </h1>
        </div>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
            data-aos="fade-left"
          >
            Our Smart Digital Alarms provide advanced protection for modern
            homes and businesses. Designed with cutting-edge technology, our
            systems offer real-time alerts, motion and intrusion detection,
            remote access via mobile apps, and 24/7 monitoring. Whether you're
            home or away, stay connected and secure with intelligent alarm
            systems that respond instantly to threats. Trust MultiChoice to
            deliver reliable,
          </p>
        </div>
        {/* card  */}
        <section className="py-16 px-4 lg:px-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition duration-300"
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
      
        {/* benifits  */}
        <div className="flex justify-center items-center lg:py-10 pt-4 lg:pt-20 w-full">
          <h1
            className="lg:text-5xl text-gray-700 text-3xl font-bold border-b-4 border-yellow-500"
            data-aos="zoom-in-down"
          >
            {" "}
            KEY BENIFITS
          </h1>
        </div>
        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-2 pb-7"
            data-aos="fade-left"
          >
            Experience advanced protection with our{" "}
            <span className="font-semibold text-gray-700">
              Smart Digital Alarms
            </span>
            —engineered for modern homes and businesses. Benefit from{" "}
            <span className="font-semibold text-gray-700">
              real-time alerts
            </span>
            ,{" "}
            <span className="font-semibold text-gray-700">
              motion and intrusion detection
            </span>
            ,{" "}
            <span className="font-semibold text-gray-700">
              remote mobile access
            </span>
            , and reliable{" "}
            <span className="font-semibold text-gray-700">24/7 monitoring</span>
            . Whether you're home or away, stay connected and secure with
            intelligent systems that respond instantly to threats.{" "}
            <span className="font-semibold text-gray-700">
              Trust MultiChoice
            </span>{" "}
            to safeguard what matters most.
          </p>
        </div>

        <section className="w-full flex justify-center items-center">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            {benifits.map((beni, index) => (
              <div className="py-5 p-2">
                <img
                  src={beni.img}
                  alt={`Alarm ${index + 1}`}
                  className="h-[90vh]"
                  data-aos="fade-up"
                />
              </div>
            ))}
          </div>
        </section>
        <img
          src={homestructure}
          className="lg:w-[full] lg:h-auto lg:p-4 h-[30vh]"
          alt=""
          data-aos="zoom-in-down"
        />
      </section>
      <Contact />
    </>
  );
}

export default SmartAlarmSystem;
