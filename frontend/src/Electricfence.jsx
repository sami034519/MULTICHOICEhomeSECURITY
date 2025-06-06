import React, { useEffect, useState } from "react";
import { FaBolt, FaShieldAlt, FaMobileAlt } from "react-icons/fa";
import crousal1 from "./images/electricfenceservice.jpg";
import mobilecrousal1 from "./images/electricfenceservice.jpg";
import fence1 from "./images/fencesystem (2).jpeg";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import homestructure from "./images/homestructuref.JPG";

function Electricfence() {
  const cards = [
    {
      icon: <FaBolt size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "High-Voltage Deterrence",
      description:
        "Our electric fence delivers powerful deterrent pulses to prevent unauthorized entry and enhance your property’s protection.",
    },
    {
      icon: <FaShieldAlt size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "Real-Time Tamper Alerts",
      description:
        "Stay instantly informed with alerts for any cut wires, breaches, or tampering attempts with your fence.",
    },
    {
      icon: <FaMobileAlt size={40} className="text-yellow-500 mx-auto mb-4" />,
      title: "Mobile Monitoring",
      description:
        "Easily monitor and control your electric fence from anywhere through a dedicated mobile app.",
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
      <div className="hidden top-32 lg:block relative  w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={crousal1}
          alt="Smart Home Security"
          className="w-full h-[90vh] object-cover"
        />

        <div
          className={`absolute lg:w-full top-0 left-0 h-[90vh] bg-black bg-opacity-30  transition-all duration-1000 ${
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
            className={`lg:text-[80px] text-xl pl-10 font-semibold lg:mt-28 ${
              animate
                ? "animate__animated animate__fadeInDownBig animate__delay-1s"
                : ""
            }`}
          >
            SECURE
          </h1>
          <h1
            className={`lg:text-[60px] text-xl pl-10 font-extrabold lg:mb-1 lg:mt-16 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            HOME ELECTRIC
          </h1>
          <h1
            className={`lg:text-[60px] pl-10 text-xl font-extrabold mb-2 lg:mb-10 lg:mt-6 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            FENCE
          </h1>
          <p
            className={`lg:text-lg pl-10 text-xs w-[40%] ${
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
            className={`text-5xl font-extrabold mt-3 leading-10 py-4 text-yellow-400 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            SECURE <br /> ELECTRIC FENCE
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
            ELECTRIC FENCE
          </h1>
        </div>

        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
            data-aos="fade-left"
          >
            Our advanced Electric Fence systems provide a strong and smart
            perimeter defense for your property. Equipped with high-voltage
            deterrent capabilities, tamper alerts, and real-time monitoring, our
            fences are designed to detect and deter intruders before they even
            reach your premises. With seamless integration into your security
            system and mobile app connectivity, MultiChoice ensures 24/7
            protection and complete peace of mind for your home or business.
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
              OUR HOME FENCE SERVICE
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Home Fence Service is designed to provide
              reliable, intelligent, and modern perimeter protection for your
              property. Whether it's a residential home or a commercial space,
              our fencing systems act as the first line of defense, offering
              strong physical barriers that help deter unauthorized access and
              protect your loved ones and assets.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              We go beyond traditional fencing by integrating high-voltage
              electric fence systems with smart sensors and real-time
              monitoring. Our solutions are equipped with tamper detection,
              intrusion alerts, and can be linked to your mobile device,
              allowing you to stay informed and in control from anywhere. In
              case of any breach or tampering, our system triggers instant
              alarms to alert you and security personnel.
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

export default Electricfence;
