import React from "react";

import whychhose1 from "../images/whychoose.jpg";
import whychoose2 from "../images/whychoose2f.jpg";
import Clients from "../Home/Clients/Clients";

import {
  FaBell, // Smart Alarm
  FaDoorOpen, // Door Automation
  FaVideo, // CCTV Surveillance
  FaBolt, // Electric Fence (bolt icon)
  FaSolarPanel, // Solar Energy (solar panel icon)
  FaFireAlt, // Fire Detection
} from "react-icons/fa";

const services = [
  {
    icon: <FaBell className="text-yellow-500 text-5xl mb-4" />,
    title: "Smart Alarm System",
    description:
      "Reliable, intelligent alarm systems that protect your home or business 24/7.",
  },
  {
    icon: <FaDoorOpen className="text-yellow-500 text-5xl mb-4" />,
    title: "Smart Door Automation",
    description:
      "Convenient and secure automated door solutions for modern access control.",
  },
  {
    icon: <FaVideo className="text-yellow-500 text-5xl mb-4" />,
    title: "CCTV Surveillance",
    description:
      "High-definition video monitoring to keep an eye on what matters most.",
  },
  {
    icon: <FaBolt className="text-yellow-500 text-5xl mb-4" />,
    title: "Electric Fence",
    description:
      "Advanced perimeter protection with smart sensors and real-time alerts.",
  },
  {
    icon: <FaSolarPanel className="text-yellow-500 text-5xl mb-4" />,
    title: "Solar Energy",
    description:
      "Clean, renewable solar power systems to reduce costs and carbon footprint.",
  },
  {
    icon: <FaFireAlt className="text-yellow-500 text-5xl mb-4" />,
    title: "Fire Detection System",
    description:
      "Early fire detection technology to protect your property and loved ones.",
  },
];

const WhyChooseMultiChoice = () => {
  

  return (
    <>
      <div className="hidden top-32 lg:block relative w-full h-[90vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={whychhose1}
          alt="Smart Home Security"
          className="w-full h-[90vh] object-cover"
        />
      </div>

      {/* Mobile Version */}
      <div className="block top-20 lg:hidden relative w-full h-[50vh] overflow-hidden z-30">
        <img
          loading="lazy"
          src={whychhose1}
          alt="Smart Home Security Mobile"
          className="w-full h-[50vh] object-cover"
        />
      </div>
      <section className=" relative top-36 mb-44 text-gray-800 py-16 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose MultiChoice Security Solutions?
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-lg">
            We provide reliable, modern, and smart security systems designed to
            protect what matters most to you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {services.map(({ icon, title, description }, idx) => (
            <div
              key={idx}
              className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-yellow-500 transition-shadow duration-300"
            >
              <div className="flex justify-center">{icon}</div>
              <h3 className="text-xl font-semibold mt-2 mb-3 text-yellow-500">
                {title}
              </h3>
              <p className="text-gray-300">{description}</p>
            </div>
          ))}
        </div>
      </section>
      <img className="w-full pb-7" src={whychoose2} alt="" />
      
    <Clients/>
    </>
  );
};

export default WhyChooseMultiChoice;
