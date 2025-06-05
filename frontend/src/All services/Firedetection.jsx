import React, { useEffect, useState } from "react";
import { FaFireExtinguisher, FaBell, FaShieldAlt } from "react-icons/fa";
import crousal1 from "../images/fire_alarm_guide.jpg";
import mobilecrousal1 from "../images/fire_alarm_guide.jpg";
import fence1 from "../images/firedetect.jpg";
import solarsystem from "../images/firedetect2.jpg";
import solarecofriend from "../images/mobilecrousal7.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import homestructure from "../images/homestructuref.JPG";

function Firedetection() {
  const fireIcons = [
    <FaBell className="text-4xl text-yellow-400 mb-4" />,
    <FaFireExtinguisher className="text-4xl text-yellow-400 mb-4" />,
    <FaShieldAlt className="text-4xl text-yellow-400 mb-4" />,
  ];
  const fireCards = [
    {
      title: "Instant Fire Alerts",
      description:
        "Receive immediate alerts in case of smoke, fire, or heat spikes through connected devices.",
    },
    {
      title: "Smart Smoke Detection",
      description:
        "Equipped with advanced sensors to detect smoke and heat with high accuracy and speed.",
    },
    {
      title: "24/7 Emergency Monitoring",
      description:
        "Continuous monitoring with automated emergency response integration and real-time reporting.",
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
      <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Smart Home Security"
          className="w-full h-[90vh] object-cover"
        />

        <div
          className={`absolute lg:w-full top-0 left-0 h-[90vh] bg-black bg-opacity-30 transition-all duration-1000 ${
            animate ? "animate__animated animate__backInLeft w-1/2" : "w-0"
          }`}
        ></div>

        <div
          className={`absolute pl-20 top-[200px] left-4 transform -translate-y-1/2 text-white transition-all duration-1000 ${
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
            EARLY WARNING
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold lg:mb-1 lg:mt-16 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            FIRE DETECTION
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold mb-2 lg:mb-10 lg:mt-6 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SYSTEMS
          </h1>
          <p
            className={`lg:text-lg text-xs w-[40%] ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-3s"
                : ""
            }`}
          >
            Protecting What Matters Most — Your Home, Your Safety. Fast,
            intelligent, and responsive. Smart Fire Detection Solutions to
            Prevent Disasters Before They Start.
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
          className={`absolute w-screen top-0 left-0 h-[50vh] bg-black bg-opacity-20 transition-all duration-1000 ${
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
            className={`text-5xl font-extrabold mt-3 leading-10 py-4 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            FIRE DETECTION
            <br /> SYSTEMS
          </p>
        </div>
      </div>
      {/* intro  */}
      <section className="pt-12 z-30  relative bg-white">
        <div className="flex justify-center items-center w-full">
          <h1
            className="lg:text-5xl text-gray-700 text-3xl font-bold border-b-4 border-yellow-500"
            data-aos="zoom-in-down"
          >
            FIRE DETECTION
          </h1>
        </div>

        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
            data-aos="fade-left"
          >
            <p className="text-gray-500 py-4" data-aos="fade-left">
              Our advanced Fire Detection Systems provide rapid and reliable
              protection for homes and businesses. Equipped with
              high-sensitivity smoke and heat sensors, intelligent alarm
              technology, and real-time monitoring, our systems are designed to
              detect fire hazards early and prevent disaster. Whether you need
              protection for residential, commercial, or industrial spaces,
              MultiChoice offers seamless integration with your existing
              security setup, mobile alerts, and 24/7 monitoring to ensure your
              safety and peace of mind.
            </p>
          </p>
        </div>

        {/* card  */}
        <section className="py-16 px-4 lg:px-24 bg-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {fireCards.map((card, index) => (
              <div
                key={index}
                className="bg-slate-800 rounded-xl p-4 text-center shadow-md hover:shadow-lg transition duration-300"
                data-aos="zoom-in-down"
              >
                {fireIcons[index]}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-white text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* image intro  */}
        <div className="flex justify-center lg:flex-row flex-col lg:gap-x-16 items-center lg:py-20">
          <div className="p-2">
            <img
              className="lg:max-w-xl max-w-xs"
              src={fence1}
              alt=""
              data-aos="zoom-in-down"
            />
          </div>
          <div className="lg:max-w-[40%] max-w-[90%] overflow-hidden">
            <h1 className="text-4xl font-bold pb-5" data-aos="fade-right">
              OUR FIRE DETECTION SYSTEMS
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Fire Detection Systems are designed to provide
              early warning and rapid response in the event of fire-related
              emergencies. Using intelligent sensors, our systems can detect
              smoke, heat, and gas leaks with high precision—helping to protect
              lives and property before threats escalate.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              Integrated with mobile connectivity and 24/7 monitoring, our fire
              detection solutions alert you instantly via smartphone and can
              trigger automatic alarms or notify emergency services. From
              residential spaces to commercial buildings, we deliver dependable
              fire safety technology for complete peace of mind.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:flex-row flex-col-reverse lg:gap-x-16 items-center lg:py-20">
          <div className="lg:max-w-[40%] max-w-[90%] overflow-hidden">
            <h1 className="text-4xl font-bold pb-5" data-aos="fade-right">
              PROTECT TODAY, SECURE TOMORROW.
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Fire Detection Systems are designed not just
              for safety—but for peace of mind. Early detection of smoke, heat,
              or fire hazards helps you prevent damage, protect your loved ones,
              and avoid costly losses. Our advanced sensors and intelligent
              alarms provide rapid, reliable alerts when it matters most.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              With professional installation, seamless integration with your
              security network, and real-time mobile notifications, MultiChoice
              fire detection solutions offer dependable protection for homes and
              businesses alike. Trust us to help you stay safe and secure—today
              and every day.
            </p>
          </div>

          <div className="p-2">
            <img
              className="lg:max-w-xl max-w-xs"
              src={solarsystem}
              alt=""
              data-aos="zoom-in-down"
            />
          </div>
        </div>
        <div className=" bg-slate-200 flex justify-center lg:flex-row flex-col lg:gap-x-16 items-center lg:py-20">
          <div className="p-2">
            <img
              className="lg:max-w-xl max-w-xs"
              src={solarecofriend}
              alt=""
              data-aos="zoom-in-down"
            />
          </div>
          <div className="lg:max-w-[45%] max-w-[90%] overflow-hidden">
            <h1 className="text-3xl font-bold pb-5" data-aos="fade-right">
              ADVANCED FIRE DETECTION SYSTEMS
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Fire Detection System services provide
              reliable and early warning solutions to protect your home or
              business from fire hazards. Using state-of-the-art smoke and heat
              sensors, our systems detect fire risks quickly and accurately,
              triggering immediate alerts to ensure safety and minimize damage.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              With real-time monitoring, smart integration, and mobile
              connectivity, you can stay informed and in control 24/7. Our
              expert installation and maintenance guarantee a seamless,
              dependable fire protection system tailored to your specific needs.
            </p>
          </div>
        </div>

        {/* home structure */}

        <img
          src={homestructure}
          className="lg:w-full w-screen lg:h-[70vh] lg:p-4 pb-4 h-[30vh]"
          alt=""
          data-aos="zoom-in-down"
        />
      </section>
      
    </>
  );
}

export default Firedetection;
