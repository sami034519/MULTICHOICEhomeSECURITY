import React, { useEffect, useState } from "react";
import { FiSun, FiBatteryCharging, FiSmartphone } from "react-icons/fi";
import crousal1 from "../images/solar energy.png";
import mobilecrousal1 from "../images/solar energy.png";
import fence1 from "../images/solarsystem.webp";
import solarsystem from "../images/SOLARSYSTEM2.JPG";
import solarecofriend from "../images/solarecofriendlyf-removebg-preview.png";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Contact from "../ORDER/Orderform";
import homestructure from "../images/homestructuref.JPG";

function Solarenergy() {
  const cards = [
    {
      icon: <FiSun className="text-yellow-400 text-5xl mx-auto mb-4" />,
      title: "High-Efficiency Panels",
      description:
        "Capture more sunlight with advanced solar panels designed for maximum energy output and durability.",
    },
    {
      icon: (
        <FiBatteryCharging className="text-yellow-400 text-5xl mx-auto mb-4" />
      ),
      title: "Smart Energy Storage",
      description:
        "Store excess solar power for nighttime use or cloudy days with intelligent battery backup solutions.",
    },
    {
      icon: <FiSmartphone className="text-yellow-400 text-5xl mx-auto mb-4" />,
      title: "Mobile Monitoring",
      description:
        "Track your solar system's performance in real-time from anywhere using our smart mobile app.",
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
            HIGH POWER
          </h1>
          <h1
            className={`lg:text-[60px] text-xl font-extrabold lg:mb-1 lg:mt-16 text-yellow-300 ${
              animate
                ? "animate__animated animate__lightSpeedInLeft animate__delay-2s"
                : ""
            }`}
          >
            HOME SOLAR
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
            HOME
            <br /> SOLAR SYSTEMS
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
            SOLAR SYSTEMS
          </h1>
        </div>

        <div className="flex justify-center items-center w-full overflow-hidden">
          <p
            className="text-gray-500 lg:max-w-[50%] max-w-[95%] text-center pt-5"
            data-aos="fade-left"
          >
            Our advanced Solar Energy Systems provide a sustainable and
            cost-effective power solution for your home or business. Designed
            with high-efficiency solar panels, intelligent inverters, and
            real-time monitoring, our systems ensure maximum energy output and
            long-term reliability. Whether you aim to reduce electricity bills,
            become energy-independent, or support a greener planet, MultiChoice
            delivers seamless solar integration with smart mobile connectivity,
            ensuring 24/7 performance tracking and complete peace of mind.
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
              OUR HOME SOLAR SYSTEMS
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Solar System solutions are built to empower
              your home or business with clean, renewable energy. Whether you
              want to reduce electricity bills, minimize your carbon footprint,
              or achieve energy independence, our high-efficiency solar panels
              and smart inverters deliver dependable performance. With seamless
              integration, real-time monitoring, and expert installation, we
              bring you a sustainable power solution you can trust—day after
              day, year after year.
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

        <div className="flex justify-center lg:flex-row flex-col-reverse lg:gap-x-16 items-center lg:py-20">
          <div className="lg:max-w-[40%] max-w-[90%] overflow-hidden">
            <h1 className="text-4xl font-bold pb-5" data-aos="fade-right">
              SAVE TODAY SHINE TOMORROW.
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, our Solar System solutions are designed not just
              for sustainability—but for savings. By harnessing the power of the
              sun, you can significantly reduce your monthly electricity bills
              and protect yourself from rising energy costs. Our high-efficiency
              solar panels and smart inverters ensure you get maximum energy
              output with minimum overhead, turning sunlight into real financial
              benefits.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              With expert installation, real-time system monitoring, and
              long-term reliability, MultiChoice solar solutions are a smart
              investment for both homes and businesses. From reducing your
              carbon footprint to reclaiming control over your energy expenses,
              our systems provide a cleaner, cheaper, and more independent way
              to power your life—today and for years to come.
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
              MAKE YOUR WORLD ECO-FRIENDLY
            </h1>
            <p className="text-gray-500 py-4" data-aos="fade-left">
              At MultiChoice, we believe in powering homes and businesses with
              clean, renewable energy while making our world more eco-friendly.
              Everyone is aware of our changing climate—whether it’s a natural
              phase or influenced by human activity. The fact remains: we all
              have a responsibility to act. By choosing solar energy, you're
              choosing a sustainable path that reduces your carbon footprint and
              helps preserve the planet for future generations.
            </p>
            <p className="text-gray-500" data-aos="fade-left">
              Our high-efficiency solar panels and smart inverters are designed
              to help you lower electricity bills while contributing to a
              cleaner environment. With expert installation, seamless
              integration, and real-time monitoring, MultiChoice solar solutions
              provide reliable, long-term performance. It's time to take
              action—make the switch to solar and join us in creating a greener,
              smarter, and more energy-independent future.
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
      <Contact />
    </>
  );
}

export default Solarenergy;
